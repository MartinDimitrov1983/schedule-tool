import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import { styles } from './styles';

const Button = ({
  text,
  disabled,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <MuiButton
      variant="contained"
      disabled={disabled}
      sx={styles(color)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </MuiButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Button;
