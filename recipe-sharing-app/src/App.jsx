import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <h1>Recipe Sharing App</h1>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
            </div>
            <Routes>
                <Route path="/" element={<div><AddRecipeForm /><RecipeList /></div>} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
                <Route path="/" element={<RecipeList />} />
            </Routes>
        </Router>
    );
}

export default App;