// Redux:
const ADD = 'ADD';

// Action creator to add a new message
const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

// Reducer to handle state updates based on actions
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

// Create the Redux store using the messageReducer
const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // Update input value as the user types
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  // Submit the current input as a new message
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage),
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// React-Redux:
// Map Redux state to component props
const mapStateToProps = (state) => {
  return { messages: state };
};

// Map Redux dispatch to component props
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage));
    },
  };
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Connect the Presentational component to Redux
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Render the App with Redux Provider and connected Container
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

// Render the entire application in the root element
ReactDOM.render(<AppWrapper />, document.getElementById('root'));
