import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Default Fonts for Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// Font for Figma Design
import '@fontsource/urbanist';
import { ThemeProvider } from '@mui/material';

import './index.css';
import AppRoute from './routes';
import store from './store';
import { theme } from './utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRoute />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
);
