import { ReactNode, useMemo, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import { DRAWER_WIDTH } from '../../../utils';
import { CustomDrawer } from '../../molecules';
import './AppMenu.css';

interface AppMenuProps {
  title: string;
  children: ReactNode;
}

const AppMenu = ({ children, title }: AppMenuProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const modalProps = useMemo(
    () => ({
      keepMounted: true, // Better open performance on mobile.
    }),
    [],
  );

  const drawerStyles = useMemo(
    () => ({
      '& .MuiDrawer-paper': {
        width: { xs: '100%', sm: DRAWER_WIDTH },
        backgroundColor: '#1E1E1E',
      },
    }),
    [],
  );

  return (
    <Box marginBottom={5} display="flex" flexDirection="column">
      <AppBar position="fixed" className="appMenuStyle" elevation={0}>
        <Toolbar>
          <IconButton className="iconStyle" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="titleStyle">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={modalProps}
          sx={drawerStyles}>
          <CustomDrawer handleClose={handleDrawerToggle} />
        </Drawer>
      </Box>
      <Box component="main" marginTop={6}>
        {children}
      </Box>
    </Box>
  );
};

export default AppMenu;
