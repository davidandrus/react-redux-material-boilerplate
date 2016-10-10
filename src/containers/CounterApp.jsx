import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

class CounterApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <MuiThemeProvider>
        <Counter
          counter={counter}
          {...bindActionCreators(CounterActions, dispatch)}
        />
      </MuiThemeProvider>
    );
  }
}

CounterApp.propTypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func,
};

function select(state) {
  return {
    counter: state.counter,
  };
}

export default connect(select)(CounterApp);
