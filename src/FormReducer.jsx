export default function FormReducer(state, action) {
  switch (action.type) {
    case "CHANGE INPUT":
      return {
        ...state,
        [action.field]: action.payload
      };
    case "CHANGE ISALIVE":
      return {
        ...state,
        isAlive: !state.isAlive
      };
    default:
      return state;
  }
}
