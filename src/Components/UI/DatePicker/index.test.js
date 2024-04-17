import React from 'react';
import { render } from '@testing-library/react';

import DatePicker from './index';

test('Snapshot DatePicker', () => {
  const { asFragment } = render(
    <DatePicker title="Test" onChange={() => {}} date={null} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
