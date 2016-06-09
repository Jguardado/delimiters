import React, { Component } from 'react';
import LocaleList from './localeList.js';

export default class InputOnClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      input: '',
    };
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.setState({ input: this.state.value }, function () {
      this.setState({ value: '' });
    });

  }

  handleInputChange(event) {
    console.log('this is the event target', event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (

<form className='center'>
          <fieldset>
          <legend className='headingtext'>Enter Property Name Below</legend>
            <select onChange={this.handleInputChange.bind(this)}>
              <option value="quotationStart">quotationStart</option>
              <option value="quotationEnd">quotationEnd</option>
              <option value="alternateQuotationStart">alternateQuotationStart</option>
              <option value="alternateQuotationEnd">alternateQuotationEnd</option>
              <option value="testcase">test</option>
            </select>
          </fieldset>
          The property you have selected:
          <h2>{this.state.value}</h2>
          <LocaleList input={this.state.value}/>
        </form>
    );

  }
}
