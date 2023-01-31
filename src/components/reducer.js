function reducer(state, action) {
  switch (action.type) {
    case "add-transaction": {
      console.log("one expense added");
      console.log(typeof state);
      return [...state, action.transact];
    }
    default:
      return [];
  }
}

export default reducer;
