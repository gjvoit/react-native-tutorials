// If state is undefined, return null (for initial state - this is ES6 syntax)
// Any subsequent call will involve 2 arguments, the current state and the
// action containing an instruction telling the reducer how to modify current state
export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
