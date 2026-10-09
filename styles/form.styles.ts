export const buttonStyle = () => ({
  backgroundColor: 'var(--primary)',
  color: 'var(--on-primary)',
  borderRadius: 'var(--button-radius)',
  padding: '10px 20px',
  fontSize: '16px',
  textTransform: 'none',
  boxShadow: 'none',
});

export const inputStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 'var(--input-radius)',
  },
  '& .MuiOutlinedInput-root.Mui-focused fieldset': {
    borderColor: 'var(--primary)',
  },
};

export const baseMData = {
  isCustomLabel: true,
  variant: 'outlined',
  label_style: {
    marginBottom: '5px',
    font: 'var(--body-2-m)',
    color: 'var(--text)',
  },
  sx: {
    ...inputStyle,
  },
};
