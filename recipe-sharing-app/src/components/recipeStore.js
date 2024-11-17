import create from 'zustand';

// Zustand store for managing recipes
const useRecipeStore = create((set) => ({
    recipes: [],
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