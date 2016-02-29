const BUTTON_STYLE = {
  border: '1px solid red',
  backgroundColor: 'gray',
  boxShadow: 'none',
  marginRight: '20px',
};

const STYLES = {
  wrapper: {
    backgroundColor: 'blue',
    border: '1px solid green',
    display: 'inline-flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '300px',
    padding: '20px',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  message: {
    display: 'block',
    fontSize: '30px',
    width: '100%',
  },
  buttonGroup: {
    display: 'flex',
    width: '100%',
  },
  buttonIncrement: {
    ...BUTTON_STYLE,
  },
  buttonDecrement: {
    ...BUTTON_STYLE,
  },
  buttonIncrementIfOdd: {
    ...BUTTON_STYLE,
    marginRight: 0,
  },
};

export default STYLES;
