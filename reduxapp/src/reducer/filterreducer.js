const initialState = { filterValue: "ALL" };

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};
