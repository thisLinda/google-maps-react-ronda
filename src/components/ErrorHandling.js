import React, { Component } from 'react';
import './App.css';

class ErrorHandling extends Component {
  state = {
    message: "Unable to load Google Maps"
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    )
  }
}

export default ErrorHandling;