import React from 'react';
import { render } from '@testing-library/react';
import * as Redux from 'react-redux';

import DateSelector from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('Snapshot DateSelector', () => {
  jest.spyOn(Redux, 'useSelector').mockReturnValue([
    { date: '2024-04-17', day: 'Wednesday' },
    { date: '2024-04-18', day: 'Thursday' },
    { date: '2024-04-19', day: 'Friday' },
  ]);
  jest.spyOn(Redux, 'useSelector').mockReturnValue('2024-04-17');

  const { asFragment } = render(
    <DateSelector
      backHandler={() => {}}
      forwardHandler={() => {}}
      startDateCount={2}
      endDateCount={3}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
