import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: data },
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((el) => el.id != action.payload);
    },
  },
});

export default movieSlice.reducer;
export const { addMovie, deleteMovie } = movieSlice.actions;
