import { useState } from 'react';
import PropTypes from 'prop-types';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({ ...recipe, title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

// Add PropTypes validation
EditRecipeForm.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default EditRecipeForm;