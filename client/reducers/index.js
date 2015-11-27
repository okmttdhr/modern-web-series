import {
  ADD_MESSAGE,
} from 'actions/message-actions'

export default function (initialState) {
  return (state = initialState, action) => {
    switch(action.type) {
      case ADD_MESSAGE:
        const text = action.value.trim();
        const message = {
          id: state.messages.length + 1,
          text,
        };
        return {
          messages: [
            ...state.messages,
            message,
          ]
        };
      default:
        return state;
    }
  }
}
