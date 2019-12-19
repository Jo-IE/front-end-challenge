import React from 'react';
import { Container } from 'semantic-ui-react';
import { Redirect, Switch, Route } from 'react-router-dom';
import OspinSidebar from 'components/main/OspinSidebar';
import Devices from 'components/devices/Devices';
import Changelog from 'components/changelog/Changelog';
import Profile from 'components/profile/Profile';
import Notifications from 'components/notifications/Notifications';
import ErrorView from 'components/error/ErrorView';
import ErrorBoundary from 'components/error/ErrorBoundary';

const Main = () => (
  <div>
    <OspinSidebar />

    <Container fluid className="main-content">
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Devices} />
          <Route path="/devices" component={Devices} />
          <Route path="/profile" component={Profile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/changelog" component={Changelog} />
          <Route path="/error" component={ErrorView}></Route>
          <Redirect to="/error" />
        </Switch>
      </ErrorBoundary>
    </Container>
  </div>
);

export default Main;
