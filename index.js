import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import rootReducer from './src/reducers/index.js';
import reduxPromise from 'redux-promise';
import Header from './src/components/header.js';
import InputForm from './src/components/inputForm.js';
import { createStore, applyMiddleware } from 'redux';

const store = applyMiddleware(reduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={ store(rootReducer)}>
        <div>
          <Header/>
          <InputForm />
        </div>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
