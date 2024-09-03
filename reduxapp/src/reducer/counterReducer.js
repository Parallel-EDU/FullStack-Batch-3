const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (action.payload === "add 2") {
        return { ...state, count: state.count + 2 };
      } else {
        return { ...state, count: state.count + 1 };
      }
    case "DECREMENT":
      if (action.payload === "reduce 2") {
        return { ...state, count: state.count - 2 };
      } else {
        return { ...state, count: state.count - 1 };
      }
    default:  
      return state;
  }
};

export default counterReducer;
