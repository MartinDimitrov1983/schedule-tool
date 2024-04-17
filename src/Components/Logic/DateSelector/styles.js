const styles = {
  period: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 56.75%',
    gap: '10px',
  },
  daysLength: { display: 'flex', alignItems: 'end', marginBottom: '11px' },
  buttonWrapper: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'end',
    alignItems: 'end',
  },
  button: (disabled) => {
    return {
      width: '50px',
      height: '50px',
      margin: '-10px',
      cursor: `${!disabled && 'pointer'}`,
      fill: `${disabled ? '#acacac' : 'black'}`,
    };
  },
};

export default styles;
