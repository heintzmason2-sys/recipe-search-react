import { useState, useEffect } from 'preact/hooks'
import './app.css'
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';


export function App() {
 const [searchTerm, setSearchTerm] = useState("");
 const [submittedQuery, setSubmittedQuery] = useState("");
 const [recipes, setRecipes] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const[error, setError] = useState(null);

 useEffect(() =>{
  if (!submittedQuery) return;
  async function fetchRecipes() {
    
    try{
      setIsLoading(true);
      setError(null)
      setRecipes([]);

      const response = await fetch (
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(submittedQuery)}`
      );

        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const mapped = (data.meals || []).map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          description: meal.strInstructions
              ? meal.strInstructions.length > 140
                ? meal.strInstructions.slice(0, 140).trimEnd() + "..."
                :meal.strInstructions
              :"No description available.",
          url: meal.strSource || null,
          image: meal.strMealThumb || null,
          category: meal.strCategory || "Uncategorized",
          area: meal.strArea || "Unknown cuisine",
    }));

        setRecipes(mapped);
    
    } catch (err){
      console.error(err);
      setError("Unable to load recipes. Please check your internet connection and try again.")
    
    } finally {
      setIsLoading(false);

    }
  }
  fetchRecipes();
 }, [submittedQuery])

function handleSearchTermChange(event){
  setSearchTerm(event.target.value);
}

function handleSearchSubmit(event){
  event.preventDefault()

  const trimmedQuery = searchTerm.trim();

  if(!trimmedQuery){
    setError("Please enter a recipe name to search.")
    setSubmittedQuery("");
    setRecipes([]);
    return;
  }
  setError(null);
  setSubmittedQuery(trimmedQuery);
}
return(
  <div className='App app-shell'>
    <h1 className='app-title'>Recipe Search</h1>

    <SearchForm
    searchTerm={searchTerm}
    onSearchTermChange={handleSearchTermChange}
    onSearchSubmit={handleSearchSubmit}
    />
    {isLoading && <p className='status-message'>Loading recipes...</p>}

    {!isLoading && error && (
      <p className='status-message error'>Error: {error}</p>
    )}
    {!isLoading && !error && submittedQuery && recipes.length === 0 && (
      <p className='status-message'>No recipes found for "{submittedQuery}". Try another
      search.</p>
    )}
    {!isLoading && !error && recipes.length > 0 && (
      <RecipeList recipes={recipes} />
    )}
    
  </div>
)

}

export default App;