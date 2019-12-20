import React from 'react';
import { render } from '@testing-library/react';
import { Header } from 'semantic-ui-react';
import { ServerAPI as mockServer } from '../../src/utils/ServerAPI';
import ErrorBoundary from '../../src/components/error/ErrorBoundary';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

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
    <MemoryRouter>
      <ErrorBoundary>
        <MockError />
      </ErrorBoundary>
    </MemoryRouter>
  );

  rerender(
    <MemoryRouter>
      <ErrorBoundary>
        <MockError shouldThrow={true} />
      </ErrorBoundary>
    </MemoryRouter>
  );

  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining('MockError') };
  expect(mockServer.reportError).toHaveBeenCalledWith(error, info);
  expect(mockServer.reportError).toHaveBeenCalledTimes(1);
  getByText('Something went wrong');
  getByText('Error: fake error');
  getByText('View error');
  getByText('View stack trace');
});

test('render component if there is no error', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ErrorBoundary>
        <NoErrorView />
      </ErrorBoundary>
    </MemoryRouter>
  );

  expect(mockServer.reportError).toHaveBeenCalledTimes(0);
  getByText('No Error here!');
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});
