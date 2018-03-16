export const CHANGE_NAME = 'CHANGE_NAME';

const initialState = {
  name: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export function changeName(name) {
  return { type: CHANGE_NAME, payload: { name } };
}