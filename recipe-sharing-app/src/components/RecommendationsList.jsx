import { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore((state) => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations,
  }));

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
