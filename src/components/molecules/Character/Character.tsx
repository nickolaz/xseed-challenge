import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Box, Divider, Typography } from '@mui/material';

import { CharacterType } from '../../../utils';
import { Card } from '../../atoms';
import FavoriteButton from '../FavoriteButton';
import './Character.css';

interface CharacterProps {
  character: CharacterType;
  updateFavorites: (character: CharacterType) => void;
}

const Character = ({ character, updateFavorites }: CharacterProps) => {
  const handleFavorite = () => updateFavorites(character);

  return (
    <>
      <Card>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant="subtitle1">{character.name}</Typography>
          <Typography variant="body2">{`${character.gender} | ${character.birth_year}`}</Typography>
          <Box display={'flex'} className={'planetContainer'}>
            <RoomOutlinedIcon className="locationIcon" />
            <Typography variant="body2" color="white">
              {character.planet}
            </Typography>
          </Box>
        </Box>
        <FavoriteButton
          isFavorite={character.isFavorite}
          handleClick={handleFavorite}
        />
      </Card>
      <Divider color="#462B5E" />
    </>
  );
};

export default Character;
