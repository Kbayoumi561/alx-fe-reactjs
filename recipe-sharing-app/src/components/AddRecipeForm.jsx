import { useState } from 'react'; // Import useState
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState(''); // State for the recipe title
    const [description, setDescription] = useState(''); // State for the recipe description

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form reload
        addRecipe({ id: Date.now(), title, description }); // Add new recipe to the store
        setTitle(''); // Reset title input
        setDescription(''); // Reset description input
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update title state
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state
                placeholder="Description"
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;