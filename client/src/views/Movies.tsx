import { Link } from "react-router-dom";

export const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <Link to={"/watch"}>watch</Link>
    </div>
  );
};
