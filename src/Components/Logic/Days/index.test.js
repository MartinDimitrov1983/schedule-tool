import React from 'react';
import { render } from '@testing-library/react';
import * as Redux from 'react-redux';

import Days from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('Snapshot Days', () => {
  jest.spyOn(Redux, 'useSelector').mockReturnValue(['09:00', '12:00']);
  const { asFragment } = render(
    <Days
      showCopies={false}
      startDateCount={2}
      endDateCount={3}
      setDaysToShow={() => {}}
      daysToShow={[]}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
