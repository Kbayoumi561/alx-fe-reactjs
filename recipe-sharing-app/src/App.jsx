import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
        </div>
    );
}

export default App;