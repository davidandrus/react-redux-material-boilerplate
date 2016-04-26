import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import styles from './Counter.style';

class Counter extends Component {

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <div style={styles.wrapper}>
        <p style={styles.message}>
          Clicked: <span>{counter}</span> times
        </p>
        <div style={styles.buttonGroup}>
          <button
            style={styles.buttonIncrement}
            onClick={increment}
          >
            +
          </button>
          <button
            style={styles.buttonDecrement}
            onClick={decrement}
          >
            -
          </button>
          <button
            style={styles.buttonIncrementIfOdd}
            onClick={incrementIfOdd}
          >
            Increment if odd
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default radium(Counter);
