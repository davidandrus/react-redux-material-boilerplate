import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.any,
};
