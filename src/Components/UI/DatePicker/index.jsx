import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { DatePicker as DefaultDatePicker } from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DATE_DASH_FORMAT, DATE_DOT_FORMAT } from '../../../Constants';
import styles from './index.module.css';

const DatePicker = ({ title, onChange, date }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <p>{title}</p>
      <DefaultDatePicker
        onChange={onChange}
        value={date}
        clearIcon={null}
        calendarIcon={null}
        dayPlaceholder={null}
        monthPlaceholder={null}
        yearPlaceholder={null}
        format={date ? DATE_DOT_FORMAT : DATE_DASH_FORMAT}
        className={styles.datePicker}
      />
    </Box>
  );
};

DatePicker.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  date: PropTypes.instanceOf(Date),
};

export default DatePicker;
