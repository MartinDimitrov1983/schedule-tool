import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { DatePicker } from '../..';
import { Back, Forward } from '../../../Assets';
import {
  changeStartDate,
  changeEndDate,
  changeDays,
} from '../../../Redux/slices/days';
import { formatDate, getDatesAndDays } from '../../../Utils';
import { DAYS, END_DATE, START_DATE, WEEK_LENGTH } from '../../../Constants';
//calculateEndDate
import styles from './styles';

const DateSelector = ({
  backHandler,
  forwardHandler,
  startDateCount,
  endDateCount,
}) => {
  const startDate = useSelector((state) => state.days.startDate);
  const endDate = useSelector((state) => state.days.endDate);
  const days = useSelector((state) => state.days.days);

  const dispatch = useDispatch();

  const startDateHandler = (value) => {
    const formatedDate = formatDate(value);

    dispatch(changeStartDate(formatedDate));
    dispatch(changeDays(getDatesAndDays(formatedDate, endDate)));
  };

  const endDateHandler = (value) => {
    const formatedDate = formatDate(value);
    dispatch(changeEndDate(formatedDate));
    dispatch(changeDays(getDatesAndDays(startDate, formatedDate)));
  };

  return (
    <Box sx={styles.period}>
      <DatePicker
        title={START_DATE}
        onChange={startDateHandler}
        date={startDate ? new Date(startDate) : null}
      />
      <DatePicker
        title={END_DATE}
        onChange={endDateHandler}
        date={endDate ? new Date(endDate) : null}
      />
      <Box sx={styles.daysLength}>
        {days.length > 0 && <Typography>{`${days.length} ${DAYS}`}</Typography>}
      </Box>
      <Box sx={styles.buttonWrapper}>
        {days.length > WEEK_LENGTH && (
          <>
            <Back
              style={styles.button(startDateCount === 0)}
              onClick={backHandler}
              disabled={startDateCount === 0}
            />
            <Forward
              style={styles.button(endDateCount === days.length)}
              onClick={forwardHandler}
              disabled={endDateCount === days.length}
            />
          </>
        )}{' '}
      </Box>
    </Box>
  );
};

DateSelector.propTypes = {
  backHandler: PropTypes.func,
  forwardHandler: PropTypes.func,
  startDateCount: PropTypes.number,
  endDateCount: PropTypes.number,
};

export default DateSelector;
