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
  }

  handleChange(event) {
    // Update the input value in state to the current input
    this.setState({
      input: event.target.value,
    });
  }

  submitMessage() {
    // Add the current input to the messages array in state
    // and clear the current input
    this.setState((state) => ({
      messages: [...state.messages, state.input],
      input: '',
    }));
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          value={this.state.input}
          onChange={this.handleChange}
          placeholder='Type your message'
        />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {/* Use .map to render li elements for each message in the array */}
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
