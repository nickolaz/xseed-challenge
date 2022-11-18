import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';

import './CustomDrawer.css';

interface CustomDrawerProps {
  handleClose: () => void;
}

const CustomDrawer = ({ handleClose }: CustomDrawerProps) => {
  return (
    <>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          className="iconStyle"
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Box className="MenuStyle">
        <Link to={'/'} color="white" className="linkStyle">
          <Typography className="drawerText">Characters</Typography>
        </Link>
        <Link to={'/favorites'} color="white" className="linkStyle">
          <Typography className="drawerText">Favorites</Typography>
        </Link>
      </Box>
    </>
  );
};

export default CustomDrawer;
