import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };

    this._toggleDisabled = this._toggleDisabled.bind(this);
  }

  _toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <a onClick= { this._toggleDisabled }>
          toggle disabledState sucka
        </a>
        <Button disabled={ disabled }>Submit</Button>
      </div>
    );
  }
}
