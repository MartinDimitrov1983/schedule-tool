import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { Button } from '../../';
import { shouldDisableButtons, shouldDisableUpload } from '../../../Utils';
import {
  MAGENTA,
  AUTOCOMPLETE,
  RESET,
  LIGHT_DARK,
  UPLOAD,
} from '../../../Constants';
import styles from './styles';

const MainButtons = ({
  resetHandler,
  mouseEnterhandler,
  mouseLeaveHadler,
  autoCompleteHandler,
  uploadHandler,
  isAutoCompletePressed,
}) => {
  const times = useSelector((state) => state.days.times);
  return (
    <Box sx={styles.mainButtons}>
      <Box />
      <Button
        text={RESET}
        color={LIGHT_DARK}
        disabled={shouldDisableButtons(times)}
        sx={styles.reset}
        onClick={resetHandler}
      />
      <Button
        text={AUTOCOMPLETE}
        color={MAGENTA}
        disabled={shouldDisableButtons(times) || isAutoCompletePressed}
        onMouseEnter={mouseEnterhandler}
        onMouseLeave={mouseLeaveHadler}
        onClick={autoCompleteHandler}
      />
      <Button
        text={UPLOAD}
        disabled={shouldDisableUpload(times)}
        color={LIGHT_DARK}
        onClick={uploadHandler}
      />
    </Box>
  );
};

MainButtons.propTypes = {
  resetHandler: PropTypes.func,
  mouseEnterhandler: PropTypes.func,
  mouseLeaveHadler: PropTypes.func,
  autoCompleteHandler: PropTypes.func,
  uploadHandler: PropTypes.func,
  isAutoCompletePressed: PropTypes.bool,
};

export default MainButtons;
