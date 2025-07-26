import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: get().applyFilter(state.recipes, term),
    })),

  applyFilter: (recipes, term) =>
    recipes.filter((r) =>
      r.title.toLowerCase().includes(term.toLowerCase())
    ),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: get().applyFilter(recipes, state.searchTerm),
    })),
}));
