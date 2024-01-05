//*** Redux:
const ADD = 'ADD';

// Action creator function to add a new message
const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

// Reducer function to handle the state changes based on the action type
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      // Concatenate the current message to the existing state
      return [...state, action.message];
    default:
      return state;
  }
};

// Create a Redux store with the messageReducer
const store = Redux.createStore(messageReducer);

//*** React:

// React component to display messages and handle user input
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    // Initialize component state with input and messages
    this.state = {
      input: '',
      messages: [],
    };
    // Bind event handlers
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // Event handler to update input state on user input
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  // Event handler to submit a new message and update the state
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage),
      };
    });
  }

  // Render method to display the input field, button, and message list
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {/* Map through messages and render each as a list item */}
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// React component to wrap the DisplayMessages component with the Redux Provider
const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider with the Redux store and the DisplayMessages component
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }
}
