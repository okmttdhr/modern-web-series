export const ADD_MESSAGE = 'add-message';

export function addMessage(value) {
  console.log('actions');
  return {
    type: ADD_MESSAGE,
    value,
  };
}
