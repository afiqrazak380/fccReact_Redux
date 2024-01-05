// Action creator to add a new message
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message,
  };
};

// MapDispatchToProps function to connect the action creator to dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // Function to submit a new message, dispatching the addMessage action
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};
