import React from "react";
import Subcomponent from "./subcomponent";
function Component(props) {
  const obj = {
    type: "",
    payload: "",
  };
  return (
    <>
      <h1>Hi</h1>
      <Subcomponent name={props.name} />
      <p>
        <strong>State:</strong>
        The Entire State of our application is stored in a single JS object
        known as the store.
      </p>
      <p>
        <strong>Actions:</strong>
        Actions are JS objects that describes what happened in the application.
      </p>
      <p>
        <strong>Reducer:</strong>
        Reducers are functions that take the current state and an Action as an
        argument, it returns a new state. Specifies how the state should change.
      </p>
      <p>
        <strong>Store:</strong>
        The Store is the central object that holds the state of the enitre
        application. The store is created using the reducer.
      </p>
      <p>
        <strong>Dispatch:</strong>
        Dispatch is the method used to send actions to the store. When an action
        is dispatched, the reducer will process it and update the state.
      </p>
      <p>
        <strong>Selectors:</strong>
        These are functions that extract specific piece of information from the
        state.
      </p>
    </>
  );
}

export default Component;
