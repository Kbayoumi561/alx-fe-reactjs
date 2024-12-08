import { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from data.json
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/data.json"); // Fetching local data
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error loading recipe data:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;