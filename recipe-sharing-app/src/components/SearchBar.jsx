import useRecipeStore from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Update the search term
        filterRecipes(); // Trigger filtering
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
        />
    );
};

export default SearchBar;