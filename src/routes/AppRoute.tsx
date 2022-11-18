import { Route, Routes } from 'react-router-dom';

import { CharactersPage, FavoritesPage } from '../components/pages';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default AppRoute;
