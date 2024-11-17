import useRecipeStore from '../recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Access filteredRecipes from Zustand store
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
            {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
                ))
            ) : (
                <p>No recipes found.</p> // Message when no filtered results exist
            )}
        </div>
    );
};

export default RecipeList;