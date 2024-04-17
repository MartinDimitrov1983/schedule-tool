import React from 'react';
import { render } from '@testing-library/react';
import * as Redux from 'react-redux';

import MainButtons from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('Snapshot MainButtons', () => {
  jest.spyOn(Redux, 'useSelector').mockReturnValue([['09:00', '12:00']]);
  const { asFragment } = render(
    <MainButtons
      resetHandler={() => {}}
      mouseEnterhandler={() => {}}
      mouseLeaveHadler={() => {}}
      autoCompleteHandler={() => {}}
      uploadHandler={() => {}}
      isAutoCompletePressed={false}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
