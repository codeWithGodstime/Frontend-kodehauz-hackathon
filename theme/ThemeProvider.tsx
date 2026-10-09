'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppThemeMode, createAppTheme, theme } from './theme.config';

interface ThemeProviderProps {
  children: ReactNode;
  mode?: AppThemeMode;
}

export const ThemeProvider = ({
  children,
  mode = 'dark',
}: ThemeProviderProps) => {
  const resolved = mode === 'dark' ? theme : createAppTheme(mode);
  return (
    <MuiThemeProvider theme={resolved}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
