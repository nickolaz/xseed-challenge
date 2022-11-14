import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { IconButton } from '@mui/material';

import './FavoriteButton.css';

interface FavoriteButtonProps {
  handleClick?: React.MouseEventHandler<HTMLLabelElement>;
  isFavorite?: boolean;
}

const FavoriteButton = ({ handleClick, isFavorite }: FavoriteButtonProps) => {
  return (
    <IconButton
      onClick={handleClick}
      aria-label="make favorite"
      component="label"
      className="iconButtonStyle">
      {isFavorite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
    </IconButton>
  );
};
export default FavoriteButton;
