import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialFavoritesState = (): number[] => {
  const storedFavoritesState = localStorage.getItem("favorites");
  return storedFavoritesState ? JSON.parse(storedFavoritesState) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getInitialFavoritesState(),
  reducers: {
    addFavorites: (state, action: PayloadAction<number[]>) => {
      state = action.payload;
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    addFavorite: (state, action: PayloadAction<number>) => {
      state.push(action.payload);

      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((id) => id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    resetFavorites: (state) => {
      state = [];
      localStorage.removeItem("favorites");
    },
  },
});

export const { addFavorites, addFavorite, removeFavorite, resetFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
