import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

<Route
  path="/"
  element={
    <>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  }
/>
