'use client';

import React from 'react';
import Link from 'next/link';
import { Button, CircularProgress } from '@mui/material';

export interface AppButtonProps {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  radius?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  label,
  onClick,
  href,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  loading = false,
  startIcon,
  endIcon,
  className,
  fullWidth = false,
  disabled = false,
  type = 'button',
  radius = 'var(--button-radius)',
}) => {
  const spinnerSizeMap = {
    small: 16,
    medium: 20,
    large: 24,
  };

  // Responsive font sizes: Mobile (xs) -> Tablet (sm) -> Desktop (md/lg)
  const responsiveFontSizeMap = {
    small: { xs: '10px', sm: '12px' },
    medium: { xs: '12px', sm: '12px', md: '14px' },
    large: { xs: '12px', sm: '14px', md: '16px' },
  };

  const responsivePaddingMap = {
    small: { xs: '4px 10px', sm: '6px 12px' },
    medium: { xs: '6px 12px', sm: '8px 16px', md: '8px 20px' },
    large: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...(href && { component: Link, href })}
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : undefined}
      endIcon={!loading ? endIcon : undefined}
      fullWidth={fullWidth}
      type={href ? undefined : type}
      className={className}
      sx={{
        borderRadius: radius,
        textTransform: 'none',
        fontWeight: 'medium',
        textWrap: 'nowrap',
        boxShadow: 'none',
        fontSize: responsiveFontSizeMap[size],
        padding: responsivePaddingMap[size],
        maxWidth: '100%',
      }}
    >
      {loading ? (
        <CircularProgress size={spinnerSizeMap[size]} color="inherit" />
      ) : (
        children || label
      )}
    </Button>
  );
};

export default AppButton;
