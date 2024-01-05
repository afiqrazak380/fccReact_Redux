// Action creator to add a new message
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message,
  };
};

// mapStateToProps function to map the state to component props
const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

// mapDispatchToProps function to map dispatching of actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    // Function to submit a new message by dispatching the addMessage action
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

// Presentational component definition
class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Render a simple heading for the presentational component
    return <h3>This is a Presentational Component</h3>;
  }
}

// Using the connect function from ReactRedux to connect the presentational component to the Redux store
const connect = ReactRedux.connect;

// Creating a connected component by connecting the Presentational component with mapStateToProps and mapDispatchToProps
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);
