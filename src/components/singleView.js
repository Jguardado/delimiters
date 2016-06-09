import React, { Component } from 'react';

export default class SingleView extends Component {
  render() {
    return (
      <div>
      <span>OUTPUT:{this.props.keyValue}</span>
      </div>
    );
  }
}
