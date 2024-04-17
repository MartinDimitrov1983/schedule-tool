import { GREY, LIGHT_GREY } from '../../../Constants';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '350px',
    minWidth: '101px',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '8px',
  },
  day: {
    fontWeight: 'bold',
  },
  body: (isTemplate) => {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: `${isTemplate ? GREY : LIGHT_GREY}`,
      minHeight: '80%',
      width: '100%',
      height: '100%',
    };
  },
  emptyBody: {
    backgroundColor: LIGHT_GREY,
    minHeight: '80%',
    width: '100%',
  },
};

export default styles;
