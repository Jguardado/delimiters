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

  refreshButton() {
    this.setState({ input: '', value: '' });
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (

        <form className='form-group'>
          <fieldset>
          <legend>Enter Property Name Below</legend>
            <select className="form-control input-lg" onChange={this.handleInputChange.bind(this)}>
              <option value="quotationStart">quotationStart</option>
              <option value="quotationEnd">quotationEnd</option>
              <option value="alternateQuotationStart">alternateQuotationStart</option>
              <option value="alternateQuotationEnd">alternateQuotationEnd</option>
              <option value="testcase">test</option>
            </select>
            <button className="btn btn-default" onClick={this.refreshButton.bind(this)}>Refresh</button>
          </fieldset>
          <legend>The property you have selected:</legend>
          <h3>{this.state.value}</h3>
          <LocaleList input={this.state.value}/>
        </form>
    );

  }
}
