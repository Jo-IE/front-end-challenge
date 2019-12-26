import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router'; // https://reacttraining.com/react-router/web/api/MemoryRouter
import Main from '../../src/components/main/Main';
import { renderWithRouter } from '../utils/testRouter';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Main.jsx', () => {
  const renderMain = () =>
    render(
      <MemoryRouter>
        <Main dispatch={jest.fn()} />
      </MemoryRouter>
    );

  const SIDEBARITEMS = [
    'Devices',
    'Profile',
    'Notifications',
    'Changelog',
    'Logout'
  ];
  describe('the sidebar items', () => {
    test('are all found', async () => {
      const { getByText } = renderMain();

      SIDEBARITEMS.forEach(getByText);
    });
  });
  describe('on Error', () => {
    const route = '/badroute';
    test('sidebar items are present on error', () => {
      const { getByText } = renderWithRouter(<Main />, { route });
      getByText('404');
      SIDEBARITEMS.forEach(getByText);
    });
    test('url changes to /error on error', () => {
      let history = createMemoryHistory();
      history.location.pathname = '/badroute';
      const { getByText } = render(
        <Router history={history}>
          <Main dispatch={jest.fn()} />
        </Router>
      );
      getByText('404');
      expect(history).toHaveProperty('location.pathname', '/error');
    });
    test('user is redirected to home page on click of button', async () => {
      const { getByText } = renderWithRouter(<Main />, { route });
      fireEvent.click(getByText('Go Back Home'));
      await waitForElement(() => getByText(/Stem Cell Incubator/i));
    });
  });
});
