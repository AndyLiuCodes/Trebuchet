import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {
    hover?: string;
  }
  interface SimplePaletteColorOptions {
    hover?: string;
  }
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#F5E5CB',
      // light: '',
      // dark: '',
      // contrastText: ''
    },
    secondary: {
      main: '#E5E5CB',
      contrastText: '#0000001a',
      hover: '#D5CEA3',
    },
    error: {
      main: '#A80000',
      contrastText: '#540000',
    },
    warning: {
      main: '#FF6600',
    },
    info: {
      main: '#3c2a21',
    },
    // success: {},
    background: {
      default: '#3c2a21',
      paper: '#1A120B',
    },
  },
});

export default defaultTheme;
