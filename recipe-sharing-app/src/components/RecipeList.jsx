import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
                        <h3>
                            {/* Use Link to navigate to the recipe details page */}
                            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                        </h3>
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