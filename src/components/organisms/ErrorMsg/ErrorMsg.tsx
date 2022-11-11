import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import './ErrorMsg.css';

interface ErrorMsgProps {
  error: String;
}

const ErrorMsg = ({ error }: ErrorMsgProps) => {
  if (error === '') {
    return null;
  }
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      marginTop={10}
      borderRadius={6}
      padding={10}
      className="container">
      <WarningAmberIcon className="icon" />
      <Typography variant="subtitle1">{error}</Typography>
    </Box>
  );
};
export default ErrorMsg;
