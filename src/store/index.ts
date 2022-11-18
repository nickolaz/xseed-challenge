import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { favoritesActions, favoritesReducer, FavoritesType } from './Favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export type RootStoreType = ReturnType<typeof rootReducer>;

export { favoritesActions };

export type { FavoritesType };

export default configureStore({
  reducer: rootReducer,
});
