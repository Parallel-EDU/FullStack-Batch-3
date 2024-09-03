export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};

export const decrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 1000);
  };
};
