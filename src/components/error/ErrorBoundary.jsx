import React, { Component } from 'react';
import { ServerAPI } from '../../utils/ServerAPI';

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

  render() {
    return this.state.hasError ? (
      <div>
        <p>Something went wrong</p>
        <p>{this.state.error.toString()}</p>
        <p>{this.state.info.componentStack}</p>{' '}
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
