import React from 'react';
import { render } from '@testing-library/react';

import CustomDialog from './index';

test('Snapshot CustomDialog', () => {
  const { asFragment } = render(
    <CustomDialog isOpen={false} setIsOpen={() => {}} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
