import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie({ id: Date.now(), name: newMovie }));
      setNewMovie("");
    }
  };

  return (
    <>
      <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
      <button onClick={handleAddMovie}> Add Movie</button>
    </>
  );
};
