import create from 'zustand';

// Zustand store for managing recipes
const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),
    setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;