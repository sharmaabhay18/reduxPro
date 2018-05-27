export default (state = null, action) => {
  switch (action.type) {
    case 'selected_id':
       return action.payload;
    default:
      return state;
  }
};
