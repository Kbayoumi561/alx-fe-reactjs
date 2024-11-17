import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><AddRecipeForm /><RecipeList /></div>} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </Router>
    );
}

export default App;