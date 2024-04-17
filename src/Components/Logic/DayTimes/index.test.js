import React from 'react';
import { render } from '@testing-library/react';

import DayTimes from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('Snapshot DayTimes', () => {
  const { asFragment } = render(
    <DayTimes
      isTemplate={false}
      isCompleted={false}
      dayIndex={0}
      timeIndex={0}
      removeHandler={() => {}}
      autocompleteData={''}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
