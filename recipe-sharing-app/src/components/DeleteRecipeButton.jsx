import PropTypes from 'prop-types';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    const handleDelete = () => {
        deleteRecipe(recipeId);
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

// Add PropTypes validation
DeleteRecipeButton.propTypes = {
    recipeId: PropTypes.number.isRequired, // Validate recipeId as a required number
};

export default DeleteRecipeButton;