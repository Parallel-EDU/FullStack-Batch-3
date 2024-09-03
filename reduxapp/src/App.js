import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementAsync, decrementAsync } from "./action";

function App() {
  const count = useSelector((state) => state.counter.count);
  // const filter = useSelector((state) => state.filter.filterValue);
  const dispatch = useDispatch();

  //action creator

  // const increment = () => ({ type: "INCREMENT" });

  const dispatchIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const dispatchDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const dispatchIncrementby2 = () => {
    dispatch({ type: "INCREMENT", payload: "add 2" });
  };

  const dispatchdecrementby2 = () => {
    dispatch({ type: "DECREMENT", payload: "reduce 2" });
  };

  return (
    <div>
      <button onClick={dispatchdecrementby2}>Decrement by 2</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
      <p>{count}</p>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={dispatchIncrementby2}>Increment by 2</button>

      <div>
        {/* <p>{filter}</p> */}
      </div>
    </div>
  );
}

export default App;
