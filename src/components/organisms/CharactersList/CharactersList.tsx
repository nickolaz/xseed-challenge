import { Grid } from '@mui/material';

import { CharacterType } from '../../../utils';
import { Character, CharacterSkeleton } from '../../molecules';

interface CharactersListProps {
  characteres?: CharacterType[];
  loading: Boolean;
  updateFavorites: (character: CharacterType) => void;
}
const CharactersList = ({
  characteres,
  loading,
  updateFavorites,
}: CharactersListProps) => {
  //Array of Fake Elements for fill the screen with skeletons
  const arrayOfTen = Array.from(Array(10).keys());

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 5, md: 8 }}
      columns={{ xs: 4, sm: 8, md: 8 }}>
      {loading
        ? arrayOfTen.map((value) => (
            <Grid item xs={4} sm={4} md={4} key={value}>
              <CharacterSkeleton key={value} />
            </Grid>
          ))
        : characteres?.map((character) => (
            <Grid item xs={4} sm={4} md={4} key={character.name}>
              <Character
                character={character}
                updateFavorites={updateFavorites}
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default CharactersList;
