import create from 'zustand';

// Zustand store for managing recipes
const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '', // State for the search term
    filteredRecipes: [], // State for the filtered recipes
    favorites: [], // List of favorite recipe IDs
    recommendations: [], // List of recommended recipes

    // Add a recipe to favorites
    addFavorite: (recipeId) =>
        set((state) => ({
            favorites: [...state.favorites, recipeId],
        })),
        // Remove a recipe from favorites
    removeFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
        })),

    // Generate recommendations based on favorites
    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) =>
                    state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock logic
            );
            return { recommendations: recommended };
        }),
    setSearchTerm: (term) =>
        set((state) => ({
            searchTerm: term,
        })),

    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        })),
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
                ),
            })),
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
            })),
    setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;