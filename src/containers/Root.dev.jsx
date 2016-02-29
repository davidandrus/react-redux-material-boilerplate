import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <CounterApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.any,
};
