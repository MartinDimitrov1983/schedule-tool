import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { DayTimes, Button } from '../..';
import { removeTime } from '../../../Redux/slices/days';
import { shouldDisableUpload } from '../../../Utils';
import { ADD_TIME, DARK_GREY } from '../../../Constants';
import styles from './styles';

const Card = ({ day, date, dayIndex, isTemplate, autoCompleteData }) => {
  const times = useSelector((state) => state.days.times);
  const isAutoComplete = useSelector((state) => state.days.isAutoComplete);
  const [isHoverd, setIsHovered] = useState(
    times[dayIndex]?.length > 0 || autoCompleteData?.length > 0,
  );
  const [isVisible, setIsVisible] = useState(
    times[dayIndex]?.length > 0 ? false : true,
  );
  const [addTime, setAddTime] = useState(
    isAutoComplete ? autoCompleteData : times[dayIndex],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setAddTime(isAutoComplete ? autoCompleteData : times[dayIndex]);
    setIsHovered(times[dayIndex]?.length > 0 || autoCompleteData?.length > 0);
  }, [autoCompleteData, dayIndex, isAutoComplete, times]);

  const clickCardHandler = () => {
    setIsHovered(true);
  };
  const mouseLeaveHandler = () => {
    setIsVisible(false);
  };
  const mouseEnterHandler = () => {
    setIsVisible(true);
  };

  const addHandler = () => {
    setAddTime((prevState) => {
      const newState = prevState.concat([{ id: `id-${prevState.length + 1}` }]);
      return newState;
    });
  };

  const removeHandler = (id, index) => {
    setAddTime((prevState) => {
      const newState = prevState.filter((time) => time.id !== id);
      return newState;
    });
    dispatch(removeTime({ dayIndex, timeIndex: index }));
  };

  return (
    <Box
      sx={styles.wrapper}
      onClick={clickCardHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}>
      <Box sx={styles.header}>
        <Typography sx={styles.day}>{day}</Typography>
        <Typography>{date}</Typography>
      </Box>
      {isHoverd ? (
        <Box sx={styles.body(isVisible && isTemplate)}>
          {addTime.map((time, index) => {
            return (
              <DayTimes
                key={`${time}-${index}`}
                isTemplate={isTemplate}
                isCompleted={!shouldDisableUpload(times)}
                dayIndex={dayIndex}
                timeIndex={index}
                removeHandler={() => removeHandler(time.id, index)}
                autocompleteData={autoCompleteData?.[index]}
              />
            );
          })}
          {isVisible && isTemplate && (
            <Button
              text={ADD_TIME}
              disabled={false}
              color={DARK_GREY}
              onClick={addHandler}
            />
          )}
        </Box>
      ) : (
        <Box sx={styles.emptyBody} />
      )}
    </Box>
  );
};

Card.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  dayIndex: PropTypes.number,
  isTemplate: PropTypes.bool,
  autoCompleteData: PropTypes.array,
};

export default Card;
