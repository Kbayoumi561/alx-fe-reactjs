import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();  // Access the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data from data.json
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch("/data.json"); // Or an API endpoint
        const data = await response.json();
        const recipeData = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeData);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetail();
  }, [id]);  // Fetch data again if the ID changes

  if (!recipe) return <div className="text-center text-xl">Loading...</div>; // Show a loading state

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>
      
      {/* Applying shadow class to image */}
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md shadow-lg mb-4" />
      
      <div>
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;