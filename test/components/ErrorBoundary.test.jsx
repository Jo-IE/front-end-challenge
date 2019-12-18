import React from 'react';
import { render, getByAltText } from '@testing-library/react';
import { Header } from 'semantic-ui-react';

import { ServerAPI as mockServer } from '../../src/utils/ServerAPI';
import ErrorBoundary from '../../src/components/error/ErrorBoundary';

jest.mock('../../src/utils/ServerAPI');

afterEach(() => {
  jest.clearAllMocks();
});

function MockError({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('fake error');
  } else {
    return null;
  }
}

const NoErrorView = () => <Header>No Error here!</Header>;

test('calls reportError function and renders error messages', () => {
  mockServer.reportError.mockResolvedValueOnce({ success: true });
  const { rerender, getByText } = render(
    <ErrorBoundary>
      <MockError />
    </ErrorBoundary>
  );

  rerender(
    <ErrorBoundary>
      <MockError shouldThrow={true} />
    </ErrorBoundary>
  );

  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining('MockError') };
  expect(mockServer.reportError).toHaveBeenCalledWith(error, info);
  expect(mockServer.reportError).toHaveBeenCalledTimes(1);
  getByText('Something went wrong');
  getByText('Error: fake error');
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

describe('no error', () => {
  test('render component if there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <NoErrorView />
      </ErrorBoundary>
    );

    expect(mockServer.reportError).toHaveBeenCalledTimes(0);
    getByText('No Error here!');
  });
});
