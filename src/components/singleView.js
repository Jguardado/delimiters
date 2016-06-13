import React, { Component } from 'react';

export default class SingleView extends Component {
  render() {
    return (
      <div>
      <h3 className='bg-success'>OUTPUT:  {this.props.keyValue}</h3>
      </div>
    );
  }
}
