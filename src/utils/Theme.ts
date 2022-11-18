import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Urbanist',
    subtitle1: {
      color: 'white',
      lineHeight: 2,
    },
    body2: {
      lineHeight: 2,
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Urbanist';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Urbanist'), local('Urbanist-Regular');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
  },
});
export default theme;
