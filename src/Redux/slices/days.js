import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  period: 0,
  days: [],
  times: [],
  startDate: null,
  endDate: null,
  isAutoComplete: false,
  template: [],
  templateLength: 0,
};

export const daysSlice = createSlice({
  initialState,
  name: 'days',
  reducers: {
    changeStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    changeEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    changeDays: (state, action) => {
      state.days = action.payload;
      if (state.times.length === 0) {
        state.times.length = state.days.length;
        state.times = state.times.fill([]);
      }

      if (state.times.length > 0) {
        const addedDays = new Array(state.days.length - state.times.length);
        addedDays.fill([]);
        state.times = state.times.concat(addedDays);
      }
    },
    changeTime: (state, action) => {
      state.times[action.payload.dayIndex][action.payload.timeIndex] =
        action.payload.value;
    },
    removeTime: (state, action) => {
      const newDayTimes = [...state.times[action.payload.dayIndex]];
      newDayTimes.splice(action.payload.timeIndex, 1);
      state.times[action.payload.dayIndex] = newDayTimes;
    },
    autoComplete: (state, action) => {
      state.isAutoComplete = action.payload;
    },
    setTemplate: (state, action) => {
      state.template = action.payload.arrays;
      state.templateLength = action.payload.templateLength;
    },
    resetTimes: (state) => {
      state.times.length = state.days.length;
      state.times = state.times.fill([]);
    },
    autoCompleteTimes: (state, action) => {
      state.times = action.payload;
      state.isAutoComplete = false;
      state.template = [];
      state.templateLength = 0;
    },
    clearShedule: () => initialState,
  },
});

export const {
  changeStartDate,
  changeEndDate,
  changeDays,
  changeTime,
  removeTime,
  autoComplete,
  setTemplate,
  resetTimes,
  autoCompleteTimes,
  clearShedule,
} = daysSlice.actions;

export default daysSlice.reducer;
