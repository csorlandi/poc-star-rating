import { useContext } from "react"
import { StarRatingContext } from "."

export default function Label() {
  const { rating, labelText } = useContext(StarRatingContext);

  return (
    <div>{typeof labelText === 'function' && labelText(String(rating))}</div>
  );
}