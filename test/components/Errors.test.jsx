import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Errors from '../../src/components/error/Errors';

afterEach(cleanup);
describe('Errors', () => {
  it('should contain error message', () => {
    const { getByText, getByRole } = render(<Errors />);
    getByText('404');
  });
});
