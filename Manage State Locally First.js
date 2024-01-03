class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    // Binding methods to the component instance
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  handleChange(event) {
    // Update the input value in state to the current input
    this.setState({
      input: event.target.value,
    });
  }

  submitMessage() {
    // Concatenate the current message to the messages array in state
    // and clear the value of the input
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: '',
    });
  }

  clearMessage() {
    this.setState({
      messages: [],
    });
  }

  render() {
    // Use .map on the messages array to render li elements
    const messageList = this.state.messages.map((message, index) => (
      <li key={index}>{message}</li>
    ));

    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          value={this.state.input}
          onChange={this.handleChange}
          placeholder='Type your message'
        />
        <button onClick={this.submitMessage}>Add Message</button>
        <button onClick={this.clearMessage}>Clear</button>
        <ul>{messageList}</ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

// Example of how to use the component
ReactDOM.render(<DisplayMessages />, document.getElementById('root'));
