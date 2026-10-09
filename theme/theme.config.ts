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

export type AppThemeMode = 'dark' | 'light';

// Hex values must mirror the tokens in theme.css; MUI needs raw colours to derive hover/contrast shades.
const PALETTES = {
  dark: {
    primary: { main: '#c9a25f', light: '#2a2114', dark: '#a8823f' },
    primaryContrast: '#0e0b09',
    secondary: { main: '#8fae88', light: '#182018', dark: '#5f7b5b' },
    secondaryContrast: '#0e0b09',
    success: '#8fae88',
    error: '#e0645a',
    warning: '#e9a23b',
    info: '#a89f93',
    text: { primary: '#f5efe6', secondary: '#a89f93', disabled: '#6e655a' },
    background: { default: '#0e0b09', paper: '#15110e' },
    divider: 'rgba(201, 162, 95, 0.18)',
  },
  light: {
    primary: { main: '#8f6b2a', light: '#efe3c9', dark: '#6b4f1c' },
    primaryContrast: '#f5efe6',
    secondary: { main: '#5f7b5b', light: '#dfe7dc', dark: '#44593f' },
    secondaryContrast: '#f5efe6',
    success: '#5f7b5b',
    error: '#b42318',
    warning: '#b85a24',
    info: '#5e564c',
    text: { primary: '#1a1410', secondary: '#5e564c', disabled: '#9a9186' },
    background: { default: '#f5efe6', paper: '#fbf7f0' },
    divider: 'rgba(168, 130, 63, 0.3)',
  },
} as const;

export const createAppTheme = (mode: AppThemeMode = 'dark') => {
  const palette = PALETTES[mode];

  return createTheme({
    palette: {
      mode,
      primary: { ...palette.primary, contrastText: palette.primaryContrast },
      secondary: {
        ...palette.secondary,
        contrastText: palette.secondaryContrast,
      },
      success: { main: palette.success },
      error: { main: palette.error },
      warning: { main: palette.warning },
      info: { main: palette.info },
      text: palette.text,
      background: palette.background,
      divider: palette.divider,
    },
    typography: {
      fontFamily: 'var(--font-app-font)',
      button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: { borderRadius: 12 },
    shadows: [
      'none',
      'var(--shadow-sm)',
      'var(--shadow-md)',
      'var(--shadow-lg)',
      ...Array(25 - 4).fill('var(--shadow-lg)'),
    ] as Shadows,
    spacing: (factor: number) => `calc(${factor} * var(--space-md))`,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 'var(--button-radius)', boxShadow: 'none' },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 'var(--input-radius)' },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: { textTransform: 'none' },
        },
      },
    },
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
};

export const theme = createAppTheme('dark');
