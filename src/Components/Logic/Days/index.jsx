import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Card } from '../..';
import { convertDate, createTemps } from '../../../Utils';
import { WEEK_LENGTH, COPY, TEMPLATE } from '../../../Constants';
import styles from './styles';

const Days = ({
  showCopies,
  startDateCount,
  endDateCount,
  setDaysToShow,
  daysToShow,
}) => {
  const days = useSelector((state) => state.days.days);
  const template = useSelector((state) => state.days.template);
  const templateLength = useSelector((state) => state.days.templateLength);
  const isAutoComplete = useSelector((state) => state.days.isAutoComplete);

  useEffect(() => {
    setDaysToShow(days.slice(startDateCount, endDateCount));
  }, [days, startDateCount, endDateCount, setDaysToShow]);

  return (
    <Box sx={styles.wrapper}>
      {!isAutoComplete && (
        <Box
          sx={styles.main(
            daysToShow.length,
            (daysToShow.length / WEEK_LENGTH) * 100,
            showCopies,
          )}
        >
          {daysToShow.length > 0 &&
            daysToShow.map((data, index) => {
              return (
                <Card
                  key={`${data.day}-${index}`}
                  day={data.day}
                  date={convertDate(data.date)}
                  dayIndex={index + startDateCount}
                  isTemplate={true}
                  isAutocomplete={false}
                />
              );
            })}
        </Box>
      )}

      {isAutoComplete &&
        createTemps(template.slice(0, WEEK_LENGTH), templateLength).map(
          (array, arrayIndex) => {
            return (
              <Box
                key={`${array.length}-${arrayIndex}`}
                sx={styles.main(
                  array.length,
                  (array.length / WEEK_LENGTH) * 100,
                  showCopies,
                )}
              >
                {array.map((data, index) => {
                  return (
                    <Card
                      key={`${arrayIndex}-${index}`}
                      day={
                        days[arrayIndex * array.length + index + startDateCount]
                          ?.day
                      }
                      date={convertDate(
                        days[arrayIndex * array.length + index + startDateCount]
                          ?.date,
                      )}
                      dayIndex={
                        arrayIndex * array.length + index + startDateCount
                      }
                      isTemplate={arrayIndex === 0}
                      autoCompleteData={data}
                    />
                  );
                })}
                <Typography sx={styles.tempCopy}>
                  {arrayIndex === 0 ? TEMPLATE : COPY}
                </Typography>
              </Box>
            );
          },
        )}
    </Box>
  );
};

Days.propTypes = {
  showCopies: PropTypes.bool,
  startDateCount: PropTypes.number,
  endDateCount: PropTypes.number,
  setDaysToShow: PropTypes.func,
  daysToShow: PropTypes.array,
};

export default Days;
