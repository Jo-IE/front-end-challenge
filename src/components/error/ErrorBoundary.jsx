import React, { Component } from 'react';
import { ServerAPI } from '../../utils/ServerAPI';
import { withRouter } from 'react-router-dom';
import ErrorView from './ErrorView';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState(() => {
      return {
        hasError: true,
        error,
        info
      };
    });
    ServerAPI.reportError(error, info);
  }
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return this.state.hasError ? (
      <ErrorView error={this.state.error} info={this.state.info} />
    ) : (
      this.props.children
    );
  }
}

export default withRouter(ErrorBoundary);
