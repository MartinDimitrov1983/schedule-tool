import React from 'react';
import { render } from '@testing-library/react';
import * as Redux from 'react-redux';

import Card from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('Snapshot Card', () => {
  jest.spyOn(Redux, 'useSelector').mockReturnValue({
    days: {
      times: [['09:00'], []],
      isAutoComplete: false,
    },
  });
  const { asFragment } = render(
    <Card
      day=""
      date=""
      dayIndex={2}
      isTemplate={false}
      autoCompleteData={[]}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
