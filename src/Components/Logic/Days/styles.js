import { MAGENTA } from '../../../Constants';
const styles = {
  wrapper: {
    display: 'flex',
    gap: '10px',
    margin: '0 48px',
    minHeight: '353px',
  },
  main: (frac, width, showCopies) => {
    return {
      display: 'grid',
      position: 'relative',
      gridTemplateColumns: `repeat(${frac}, 1fr)`,
      width: `${width}%`,
      borderBottom: `${showCopies && '3px solid #e11bb6'}`,
      gap: '10px',
    };
  },

  tempCopy: {
    position: 'absolute',
    bottom: '-7%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: MAGENTA,
  },
};

export default styles;
