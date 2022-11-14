import { Box } from '@mui/material';

import { CharacterType } from '../../../utils';
import { AppMenu, CharactersList, ErrorMsg } from '../../organisms';

interface CharactersTemplateProps {
  characteres?: CharacterType[];
  error: String;
  loading: Boolean;
  updateFavorites: (character: CharacterType) => void;
}

const CharactersTemplate = ({
  characteres,
  error,
  loading,
  updateFavorites,
}: CharactersTemplateProps) => {
  return (
    <Box marginX={2.5}>
      <AppMenu />
      <ErrorMsg error={error} />
      <CharactersList
        characteres={characteres}
        loading={loading}
        updateFavorites={updateFavorites}
      />
    </Box>
  );
};

export default CharactersTemplate;
