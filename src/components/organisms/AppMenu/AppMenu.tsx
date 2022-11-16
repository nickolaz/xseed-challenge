import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

const AppMenu = () => {
  return (
    <Box marginBottom={5} display={'flex'} flexDirection={'column'}>
      <Link to={'/'}>LIST</Link>
      <Link to={'/favorites'}>FAVORITES</Link>
    </Box>
  );
};

export default AppMenu;
