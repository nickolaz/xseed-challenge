import React from 'react';

import { Box } from '@mui/material';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      marginTop={4}
      marginBottom={2}>
      {children}
    </Box>
  );
};
export default Card;
