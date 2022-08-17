import { createContext, useState } from "react";
import Label from "./Label";
import StarsList from "./StarsList";

type StarRatingProps = {
  defaultState?: number;
  emptyColor?: string;
  fillColor?: string;
  height?: number;
  width?: number;
  maxValue?: number;
  labelText?: (value: string) => string;
  onChangeHover?: (value: number | null) => void;
  onChangeValue?: (value: number) => void;
  readOnly?: boolean;
};

type StarRatingContextValue = Partial<StarRatingProps> & {
  hover: null | number;
  rating: number;
  setHover: (value: number | null) => void;
  setRating: (value: number) => void;
};

export const StarRatingContext = createContext<StarRatingContextValue>({} as StarRatingContextValue);

export default function StarRating({
  defaultState = 0,
  emptyColor = 'grey',
  fillColor = '#edaa10',
  height = 53,
  labelText = (value) => `Rating is: ${value}`,
  maxValue = 5,
  onChangeHover,
  onChangeValue,
  readOnly = false,
  width = 53,
}: StarRatingProps) {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState<null | number>(null);

  function handleSetRating(value: number) {
    if (readOnly) return;

    setRating(value);
    if (typeof onChangeValue === 'function') onChangeValue(value);
  }

  function handleSetHover(value: number | null) {
    if (readOnly) return;

    setHover(value);
    if (typeof onChangeHover === 'function') onChangeHover(value);
  }

  return (
    <StarRatingContext.Provider value={{
      emptyColor,
      fillColor,
      height,
      hover,
      labelText,
      rating,
      setHover: handleSetHover,
      setRating: handleSetRating,
      width,
      maxValue,
    }}>
      <div className="star-rating-container">
        <Label />
        <StarsList />
      </div>
    </StarRatingContext.Provider>
  );
}