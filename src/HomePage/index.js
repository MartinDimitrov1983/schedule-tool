import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Divider, Typography } from '@mui/material';
import {
  autoComplete,
  resetTimes,
  setTemplate,
  autoCompleteTimes,
  clearShedule,
} from '../Redux/slices/days';
import { DateSelector, Days, MainButtons, Dialog } from '../Components';
import { createArrays, calculateTemplateLength } from '../Utils';
import { WEEK_LENGTH, SCHEDULE_PLAN, CREATE_NEW_SCHEDULE } from '../Constants';
import styles from './styles';

const HomePage = () => {
  const dispatch = useDispatch();
  const autoCompleteTemplate = useSelector((state) => state.days.template);
  const times = useSelector((state) => state.days.times);
  const days = useSelector((state) => state.days.days);
  const [isOpen, setIsOpen] = useState(false);
  const [showCopies, shouldShowCopies] = useState(false);
  const [startDateCount, setStartDateCount] = useState(0);
  const [endDateCount, setEndDateCount] = useState(WEEK_LENGTH);
  const [daysToShow, setDaysToShow] = useState([]);
  const [isAutoCompletePressed, setisAutoCompletePressed] = useState(false);
  const templateLength = calculateTemplateLength(times);
  const template = times.slice(0, templateLength) || [];

  const forwardHandler = () => {
    if (days.length > endDateCount + WEEK_LENGTH) {
      setEndDateCount((prevState) => prevState + WEEK_LENGTH);
      setStartDateCount((prevState) => prevState + WEEK_LENGTH);
    }

    if (days.length < endDateCount + WEEK_LENGTH) {
      setEndDateCount(days.length);
      setStartDateCount(days.length - WEEK_LENGTH);
    }
  };

  const backHandler = () => {
    if (startDateCount >= WEEK_LENGTH) {
      setEndDateCount((prevState) => prevState - WEEK_LENGTH);
      setStartDateCount((prevState) => prevState - WEEK_LENGTH);
    }

    if (startDateCount < WEEK_LENGTH) {
      setEndDateCount(WEEK_LENGTH);
      setStartDateCount(0);
    }
  };

  const mouseEnterhandler = () => {
    const arrays = createArrays(template, times);
    shouldShowCopies(true);
    dispatch(autoComplete(true));
    dispatch(setTemplate({ arrays, templateLength }));
  };

  const mouseLeaveHadler = () => {
    shouldShowCopies(false);
    dispatch(autoComplete(false));
  };

  const resetHandler = () => {
    setisAutoCompletePressed(false);
    dispatch(resetTimes());
  };

  const autoCompleteHandler = () => {
    setisAutoCompletePressed(true);
    dispatch(autoCompleteTimes(autoCompleteTemplate));
  };

  const uploadHandler = () => {
    const data = JSON.stringify({ days, times });
    localStorage.setItem(`${SCHEDULE_PLAN} ${new Date()}`, data);
    setIsOpen(true);
    dispatch(clearShedule());
  };

  return (
    <>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box>
        <Box sx={styles.wrapper}>
          <Typography component="h1" variant="h5" sx={styles.title}>
            {CREATE_NEW_SCHEDULE}
          </Typography>
          <DateSelector
            backHandler={backHandler}
            forwardHandler={forwardHandler}
            startDateCount={startDateCount}
            endDateCount={endDateCount}
          />
        </Box>
        <Divider sx={styles.divider} />
        <Days
          showCopies={showCopies}
          startDateCount={startDateCount}
          endDateCount={endDateCount}
          setDaysToShow={setDaysToShow}
          daysToShow={daysToShow}
        />
        <MainButtons
          resetHandler={resetHandler}
          mouseEnterhandler={mouseEnterhandler}
          mouseLeaveHadler={mouseLeaveHadler}
          autoCompleteHandler={autoCompleteHandler}
          uploadHandler={uploadHandler}
          isAutoCompletePressed={isAutoCompletePressed}
        />
      </Box>
    </>
  );
};

export default HomePage;
