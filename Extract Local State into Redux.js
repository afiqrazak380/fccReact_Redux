// Redux:
const ADD = 'ADD';

// Action creator function for adding a message
const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

// Reducer function to handle state changes based on actions
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      // If the action type is ADD, add the new message to the state
      return [...state, action.message];
    default:
      // For other action types, return the current state unchanged
      return state;
  }
};

// Create a Redux store with the messageReducer
const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    // Local component state to manage the input value
    this.state = {
      input: '',
    };
    // Binding methods to the component instance
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // Update the input state as the user types
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  // Dispatch the addMessage action with the current input value
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    // Clear the input field after submitting the message
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Input field controlled by local state */}
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        {/* Button to submit the message, calling submitMessage method */}
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {/* Map over messages from props (Redux state) */}
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// Map the Redux state to component props
const mapStateToProps = (state) => {
  return { messages: state };
};

// Map the dispatch function to component props
const mapDispatchToProps = (dispatch) => {
  return {
    // Connect the submitNewMessage prop to dispatching the addMessage action
    submitNewMessage: (message) => dispatch(addMessage(message)),
  };
};

// Connect the Presentational component to the Redux store
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// Wrap the Container component with the Redux Provider
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
