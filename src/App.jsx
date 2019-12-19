import React from 'react';
import { Loader } from 'semantic-ui-react';

import Main from 'components/main/Main';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  state = { authenticated: false };

  componentDidMount() {
    setTimeout(() => this.setState({ authenticated: true }), 300);
  }

  render() {
    const { authenticated } = this.state;

    return authenticated ? (
      <BrowserRouter forceRefresh={false}>
        <Main />
      </BrowserRouter>
    ) : (
      <Loader active size="big" />
    );
  }
}

export default App;
