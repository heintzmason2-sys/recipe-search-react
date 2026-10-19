import RecipeItem from "./RecipeItem";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem
        key={recipe.id}
        title={recipe.title}
        description={recipe.description}
        url={recipe.url}
        image={recipe.image}
        category={recipe.category}
        area={recipe.area}
        />
      ))}
    </div>
  );
}

export default RecipeList