import { useContext } from "react";
import { StarRatingContext } from ".";
import Star from "./Star";

export default function StarsList() {
  const { maxValue } = useContext(StarRatingContext);

  return (
    <div className="star-rating">
      {[...Array(maxValue)].map((_, index) => {
        const value = index + 1;

        return (
          <Star
            key={index}
            value={value}
          />
        );
      })}
    </div>
  )
}