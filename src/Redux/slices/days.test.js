import { configureStore } from '@reduxjs/toolkit';
import {
  daysSlice,
  changeStartDate,
  changeEndDate,
  changeDays,
  //   changeTime,
  //   removeTime,
  autoComplete,
  setTemplate,
  resetTimes,
  autoCompleteTimes,
  clearShedule,
} from './days';

describe('daysSlice', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should changeStartDate return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(changeStartDate('2024-04-19'));
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: '2024-04-19',
      endDate: null,
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });
  test('should changeEndDate return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(changeEndDate('2024-04-19'));
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: null,
      endDate: '2024-04-19',
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });
  test('should changeDays return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(changeDays([[], [], [], [], [], [], [], [], [], []]));
    expect(store.getState()).toEqual({
      period: 0,
      days: [[], [], [], [], [], [], [], [], [], []],
      times: [[], [], [], [], [], [], [], [], [], []],
      startDate: null,
      endDate: null,
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });
  test('should clearShedule return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(clearShedule());
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: null,
      endDate: null,
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });

  test('should autoComplete return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(autoComplete(true));
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: null,
      endDate: null,
      isAutoComplete: true,
      template: [],
      templateLength: 0,
    });
  });
  test('should setTemplate return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(setTemplate({ arrays: [], templateLength: 0 }));
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: null,
      endDate: null,
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });
  test('should resetTimes return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(resetTimes());
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: null,
      endDate: null,
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });
  test('should autoCompleteTimes return data', () => {
    const store = configureStore({ reducer: daysSlice.reducer });
    store.dispatch(autoCompleteTimes([]));
    expect(store.getState()).toEqual({
      period: 0,
      days: [],
      times: [],
      startDate: null,
      endDate: null,
      isAutoComplete: false,
      template: [],
      templateLength: 0,
    });
  });
});
