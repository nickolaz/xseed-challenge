import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CharacterType } from '../../utils';

export type FavoritesType = {
  favorites: CharacterType[];
};

const initialState: FavoritesType = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    updateFavorites: (state, action: PayloadAction<CharacterType[]>) => {
      return {
        ...initialState,
        favorites: action.payload,
      };
    },
    removeFavorites: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
