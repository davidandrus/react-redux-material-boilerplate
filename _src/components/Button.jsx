import React, { PropTypes } from 'react';

function Button(props) {
  const { disabled, children } = props;
  return (
    <button disabled={ disabled }>
      { children }
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  children: PropTypes.node,
};

export default Button;
