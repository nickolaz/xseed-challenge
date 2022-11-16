import { styled, TextField } from '@mui/material';

const CustomTextField = styled(TextField)({
  input: {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      borderRadius: '14px',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '& .MuiAutocomplete-clearIndicator': {
      color: 'white',
    },
  },
});

export default CustomTextField;
