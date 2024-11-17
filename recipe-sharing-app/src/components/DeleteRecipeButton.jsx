import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate(); // Import useNavigate to handle redirection

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate('/'); // Redirect to the home page after deletion
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

// Add PropTypes validation
DeleteRecipeButton.propTypes = {
    recipeId: PropTypes.number.isRequired, // Validate recipeId as a required number
};

export default DeleteRecipeButton;