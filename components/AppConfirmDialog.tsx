'use client';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import AppButton from './AppButton';

interface AppConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export default function AppConfirmDialog({
  open,
  title,
  message,
  confirmLabel = 'Confirm',
  loading = false,
  onConfirm,
  onClose,
}: AppConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="h5-b">{title}</DialogTitle>
      <DialogContent>
        <p className="b2-r text-text-light">{message}</p>
      </DialogContent>
      <DialogActions>
        <AppButton variant="text" color="secondary" onClick={onClose}>
          Cancel
        </AppButton>
        <AppButton color="error" loading={loading} onClick={onConfirm}>
          {confirmLabel}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
}
