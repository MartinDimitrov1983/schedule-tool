import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeTime } from '../../../Redux/slices/days';
import { TimePicker } from '../..';

const DayTimes = ({
  isTemplate,
  isCompleted,
  dayIndex,
  timeIndex,
  removeHandler,
  autocompleteData,
}) => {
  const times = useSelector((state) => state.days.times);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(changeTime({ dayIndex, timeIndex, value }));
  };

  return (
    <TimePicker
      isTemplate={isTemplate}
      isCompleted={isCompleted}
      onChange={onChange}
      value={
        autocompleteData ? autocompleteData : times?.[dayIndex]?.[timeIndex]
      }
      onRemoveClick={removeHandler}
    />
  );
};

DayTimes.propTypes = {
  isTemplate: PropTypes.bool,
  isCompleted: PropTypes.bool,
  dayIndex: PropTypes.number,
  timeIndex: PropTypes.number,
  removeHandler: PropTypes.func,
  autocompleteData: PropTypes.array,
};

export default DayTimes;
