import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import ErrorView from '../../src/components/error/ErrorView';
import { MemoryRouter } from 'react-router';

afterEach(cleanup);

const render404Error = () =>
  render(
    <MemoryRouter>
      <ErrorView />
    </MemoryRouter>
  );

const renderUncaughtError = () =>
  render(
    <MemoryRouter>
      <ErrorView error={'testError'} info={'test'} />
    </MemoryRouter>
  );
describe('Error page', () => {
  it('should contain unique error message on 404', () => {
    const { getByText } = render404Error();

    getByText('404');
    getByText(/couldn't find what you were looking for?/i);
  });
  it('should contain unique error message on uncaught error', () => {
    const { getByText } = renderUncaughtError();

    getByText('Something went wrong');
    getByText('View error');
    getByText('View stack trace');
  });
  it('should display stack trace', async () => {
    const { getByText } = renderUncaughtError();
    fireEvent.click(getByText('View stack trace'));
    await waitForElement(() => getByText(/test/i));
  });
  it('should display error', async () => {
    const { getByText } = renderUncaughtError();
    fireEvent.click(getByText('View error'));
    await waitForElement(() => getByText(/testError/i));
  });
});
