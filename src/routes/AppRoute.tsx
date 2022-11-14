import { Route, Routes } from 'react-router-dom';

import { CharactersPage } from '../components/pages';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
    </Routes>
  );
};

export default AppRoute;
