import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '../../../Assets';
import { TimePicker as DefaultTimePicker } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { TIME } from '../../../Constants';
import styles from './index.module.css';

const TimePicker = ({
  isTemplate,
  isCompleted,
  onChange,
  value,
  onRemoveClick,
}) => {
  const className = isCompleted
    ? styles.completed
    : isTemplate
      ? styles.template
      : styles.autoComplete;
  return (
    <div className={styles.container}>
      <DefaultTimePicker
        className={`${className} ${styles.wrapper}`}
        onChange={onChange}
        value={value}
        format={TIME}
        clearIcon={null}
        disableClock
      />
      {value && isCompleted && (
        <Close
          className={`${styles.icon} ${className}`}
          onClick={onRemoveClick}
        />
      )}
    </div>
  );
};

TimePicker.propTypes = {
  isTemplate: PropTypes.bool,
  isCompleted: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onRemoveClick: PropTypes.func,
};

export default TimePicker;
