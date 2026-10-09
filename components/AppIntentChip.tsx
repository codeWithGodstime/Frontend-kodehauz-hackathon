'use client';

import { Chip } from '@mui/material';
import { IngestedMessageCategory } from '@/types/ingested-message.types';

export interface AppIntentChipProps {
  category: IngestedMessageCategory | null;
  size?: 'small' | 'medium';
  className?: string;
}

const INTENT_STYLE: Record<
  IngestedMessageCategory,
  { label: string; color: string; background: string }
> = {
  order: {
    label: 'Order',
    color: 'var(--label-order)',
    background: 'var(--label-order-bg)',
  },
  enquiry: {
    label: 'Enquiry',
    color: 'var(--label-enquiry)',
    background: 'var(--label-enquiry-bg)',
  },
  ignore: {
    label: 'Noise',
    color: 'var(--label-noise)',
    background: 'var(--label-noise-bg)',
  },
};

const PENDING_STYLE = {
  label: 'Unlabelled',
  color: 'var(--text-light)',
  background: 'transparent',
};

export default function AppIntentChip({
  category,
  size = 'small',
  className,
}: AppIntentChipProps) {
  const style = category ? INTENT_STYLE[category] : PENDING_STYLE;

  return (
    <Chip
      label={style.label}
      size={size}
      className={className}
      variant={category ? 'filled' : 'outlined'}
      sx={{
        color: style.color,
        backgroundColor: style.background,
        borderColor: category ? 'transparent' : 'var(--stroke)',
        borderRadius: 'var(--chip-radius)',
        font: 'var(--footer-1-m)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        height: size === 'small' ? 22 : 28,
      }}
    />
  );
}
