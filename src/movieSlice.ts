import { createSlice } from "@reduxjs/toolkit";

type TMovie = { id: number; name: string };

type TInitialState = {
  movies: TMovie[];
};

const initialState: TInitialState = {
  movies: [
    { id: 1, name: "Interstellar" },
    { id: 2, name: "Inception" },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
