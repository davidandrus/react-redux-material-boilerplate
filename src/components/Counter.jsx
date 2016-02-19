import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: <span>{counter}</span> times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd sucka</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};
