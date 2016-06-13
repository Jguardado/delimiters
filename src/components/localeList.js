import React, { Component } from 'react';
import SingleView from './singleView.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPropertyData, getSinglePage } from '../actions/get_property';

export default class LocaleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: '',
    };
  }

  pullData(event) {
    event.preventDefault();
    this.props.getPropertyData(this.props.input);
  }

  renderItems() {
    const _self = this;
    return this.props.Data.propertyData.map(function (item) {
      return (
        <li
          className='list-group-item'
          key={item.sha}
        ><a href='#' onClick={_self.renderProperty.bind(_self, item.path)}>{item.path}</a></li>
      );
    });
  }

  renderProperty(path) {
    let separated = path.split('/');
    this.props.getSinglePage(separated[1]);
  }

  renderSingleItem() {
    //I know this is very bad practice
    if (this.props.Data.propertyData.main) {
      const info = this.props.Data.propertyData.main;
      for (var key in info) {
        for (var key2 in info[key]) {
          for (var key3 in info[key][key2]) {
            if (key3 == this.props.input) {
              return info[key][key2][key3];
            } else {
              console.log('not found');
            }

          }
        }
      }
    };

  }

  render() {
    if (this.props.Data.propertyData.length) {
      return (
        <div>
          <button
          className='btn btn-default'
          onClick={this.pullData.bind(this)}>
          Show all
          </button>
          <ul className='list-group'>{this.renderItems()}</ul>
        </div>
      );
    } else if (this.props.Data.propertyData.main && this.props.input) {
      return (
        <div>
          <button
          className='btn btn-default'
          onClick={this.pullData.bind(this)}>
          Show all
          </button>
          <SingleView keyValue={this.renderSingleItem()} />
        </div>
      );

    } else {
      return (
        <div>
          <button
          className='btn btn-default'
          onClick={this.pullData.bind(this)}>
          Show all
          </button>
        </div>
      );
    }

  }
}

function mapStateToProps(Data) {
  return { Data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPropertyData,
    getSinglePage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleList);
