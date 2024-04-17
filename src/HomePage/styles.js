const styles = {
  wrapper: { margin: '36px 48px 10px' },
  title: { fontWeight: 'bold' },
  period: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 56.75%',
    gap: '10px',
  },
  daysLength: { flexGrow: 1, marginBottom: '11px' },
  buttonWrapper: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'end',
    alignItems: 'end',
  },
  backButton: { width: '50px', height: '50px', margin: '-10px' },
  forwardButton: { width: '50px', height: '50px', margin: '-10px' },
  divider: { marginRight: '36px' },
  flex: { display: 'flex' },
  grow: { flexGrow: 1 },
  main: (frac, width) => {
    return {
      display: 'grid',
      position: 'relative',
      gridTemplateColumns: `repeat(${frac}, 1fr)`,
      //   gridTemplateColumns: `minmax(100px, 1fr)`,
      width: `${width}%`,
      borderBottom: '3px solid #e11bb6',
      gap: '10px',
    };
  },
  mainButtons: {
    display: 'grid',
    gridTemplateColumns: '57% 1fr 1fr 1fr',
    gap: '10px',
    justifyContent: 'end',
    margin: '20px 48px',
  },
  tempCopy: {
    position: 'absolute',
    bottom: '-7%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#e11bb6',
  },
  dialogContent: {
    minHeight: '150px',
    width: '200px',
    gap: '20px',
    margin: '20px 100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 'larger',
  },
  dialogButton: {
    width: '100px',
  },
};

export default styles;
