import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Errors extends Component {
  render() {
    console.log(this.props);
    return <Header as="h1">404</Header>;
  }
}

export default Errors;
