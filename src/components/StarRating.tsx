
import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    const filled = rating >= i;
    const halfFilled = rating >= i - 0.5 && rating < i;
    
    stars.push(
      <span key={i} className="relative inline-block">
        <span className="text-gray-300">★</span>
        {filled && (
          <span className="absolute inset-0 text-yellow-400 overflow-hidden">★</span>
        )}
        {halfFilled && (
          <span className="absolute inset-0 text-yellow-400 overflow-hidden w-1/2">★</span>
        )}
      </span>
    );
  }
  
  return (
    <div className="flex items-center gap-1 text-sm">
      <div className="flex">{stars}</div>
      <span className="text-muted-foreground">({rating})</span>
    </div>
  );
};

export default StarRating;
