import React from 'react';
import { render } from '@testing-library/react';

import Button from './index';

test('Snapshot Button', () => {
  const { asFragment } = render(
    <Button
      text="Test"
      disabled={false}
      color="#E11BB6"
      onClick={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
