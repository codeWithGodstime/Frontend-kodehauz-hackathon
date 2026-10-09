import { createTheme, Shadows } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      full: string;
    };
    logo: {
      width: number;
      height: number;
    };
  }
  interface ThemeOptions {
    logo?: Partial<Theme>['logo'];
    radius?: Partial<Theme>['radius'];
  }
}

// Hex values must mirror the tokens in theme.css; MUI needs raw colours to derive hover/contrast shades.
export const theme = createTheme({
  palette: {
    primary: { main: '#188c43', contrastText: '#ffffff' },
    secondary: { main: '#fd730e', contrastText: '#ffffff' },
    success: { main: '#22c55e' },
    error: { main: '#dc2626' },
    warning: { main: '#ffa000' },
    info: { main: '#868686' },
    text: { primary: '#3b3b3b', secondary: '#868686', disabled: '#a0a0a0' },
    background: { default: '#f7f7f7', paper: '#f7fafc' },
    divider: '#e6e6e6',
  },
  typography: {
    fontFamily: ['var(--font-app-font)'].join(','),
  },
  shadows: [
    'none',
    'var(--shadow-sm)',
    'var(--shadow-md)',
    'var(--shadow-lg)',
    ...Array(25 - 4).fill('var(--shadow-lg)'),
  ] as Shadows,
  spacing: (factor: number) => `calc(${factor} * var(--space-md))`,
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  logo: {
    width: 73,
    height: 73,
  },
});
