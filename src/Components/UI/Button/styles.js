export function styles(color) {
  return {
    background: color,
    borderRadius: 0,
    width: '100%',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 'bold',
    '&:hover': {
      background: color,
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      color: 'white',
      background: color,
      opacity: 0.35,
    },
  };
}
