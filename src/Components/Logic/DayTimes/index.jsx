import React from 'react';
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

export default DayTimes;
