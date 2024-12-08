import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});  // Track errors here

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an errors object to collect validation errors
    const validationErrors = {};

    // Title validation: Check if it's empty
    if (!title) {
      validationErrors.title = 'Title is required';
    }

    // Ingredients validation: Check if there are at least two ingredients
    if (!ingredients || ingredients.split('\n').length < 2) {
      validationErrors.ingredients = 'Please provide at least two ingredients.';
    }

    // Steps validation: Check if it's empty
    if (!steps) {
      validationErrors.steps = 'Preparation steps are required';
    }

    // If there are validation errors, set them in the state
    setErrors(validationErrors);

    // If there are no errors, process the form submission
    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = { title, ingredients: ingredients.split('\n'), steps };
      console.log('New Recipe Submitted:', newRecipe);

      // Reset form fields
      setTitle('');
      setIngredients('');
      setSteps('');
      alert('Recipe added successfully!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">
            Ingredients (separate each ingredient with a new line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows="5"
            placeholder="Enter ingredients (one per line)"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows="5"
            placeholder="Enter preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-2">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;