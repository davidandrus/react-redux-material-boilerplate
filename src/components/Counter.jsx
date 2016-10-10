import React, { Component, PropTypes } from 'react';
import Button from 'material-ui/RaisedButton';

export default class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <div>
        <p>
          Clicked: <span>{counter}</span> times
        </p>
        <Button
          primary
          onClick={increment}
        >
        +
        </Button>
        <Button
          primary
          onClick={decrement}
        >
          -
        </Button>
        <Button
          primary
          onClick={incrementIfOdd}
        >
          Increment if odd
        </Button>
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
