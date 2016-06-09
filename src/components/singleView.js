import React, { Component } from 'react';

export default class SingleView extends Component {
  render() {
    return (
      <div>
      <h1>OUTPUT: {this.props.keyValue}</h1>

      </div>
    );
  }
}
