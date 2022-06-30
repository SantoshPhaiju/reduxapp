const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
