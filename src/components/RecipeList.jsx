import RecipeItem from "./RecipeItem";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <article key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p className="cook-time">Cook time: {recipe.cookTime}</p>
          <a href={recipe.url} target="_blank" rel="noreferrer">
            View recipe
          </a>
        </article>
      ))}
    </div>
  );
}