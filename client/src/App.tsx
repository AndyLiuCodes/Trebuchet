import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '@/routes';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={AppRouter} />;
    </ThemeProvider>
  );
}

export default App;
