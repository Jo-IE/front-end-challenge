import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GenericError from '../../src/components/error/GenericError';

afterEach(cleanup);
describe('GenericError', () => {
  it('should contain error message', () => {
    const { getByText, getByRole } = render(<GenericError />);
    getByText('Something went wrong');
  });
});
