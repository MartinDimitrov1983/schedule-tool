import React from 'react';
import { render } from '@testing-library/react';

import TimePicker from './index';

test('Snapshot TimePicker', () => {
  const { asFragment } = render(
    <TimePicker
      isTemplate={true}
      isCompleted={true}
      onChange={() => {}}
      value="12:00"
      onRemoveClick={() => {}}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
