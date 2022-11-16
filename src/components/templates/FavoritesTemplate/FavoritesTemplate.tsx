import { Box } from '@mui/material';

import { CharacterType } from '../../../utils';
import { AppMenu, CharactersList, ErrorMsg, SearchBar } from '../../organisms';

interface FavoritesTemplateProps {
  error: String;
  favorites: CharacterType[];
  updateFavorites: (character: CharacterType) => void;
  handleSearch: (searchValue: string) => void;
}

const FavoritesTemplate = ({
  error,
  favorites,
  handleSearch,
  updateFavorites,
}: FavoritesTemplateProps) => {
  return (
    <Box marginX={2.5}>
      <AppMenu />
      <SearchBar favorites={favorites} handleSearch={handleSearch} />
      <ErrorMsg error={error} />
      <CharactersList
        characteres={favorites}
        updateFavorites={updateFavorites}
      />
    </Box>
  );
};

export default FavoritesTemplate;
