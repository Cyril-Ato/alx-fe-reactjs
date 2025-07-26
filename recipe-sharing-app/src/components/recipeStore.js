import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    return set({
      recipes: updated,
      filteredRecipes: get().applyFilter(updated, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    return set({
      recipes: updated,
      filteredRecipes: get().applyFilter(updated, get().searchTerm),
      favorites: get().favorites.filter((fid) => fid !== id),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    return set({
      recipes: updated,
      filteredRecipes: get().applyFilter(updated, get().searchTerm),
    });
  },

  setSearchTerm: (term) =>
    set({
      searchTerm: term,
      filteredRecipes: get().applyFilter(get().recipes, term),
    }),

  applyFilter: (recipes, term) =>
    recipes.filter((r) =>
      r.title.toLowerCase().includes(term.toLowerCase())
    ),

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: get().applyFilter(recipes, get().searchTerm),
    }),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        favorites.some((fid) => r.title.includes(fid)) 
    );
    set({ recommendations: recommended });
  },
}));
