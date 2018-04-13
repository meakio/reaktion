import React from "react";
import { Consumer } from "./context";

export default Component => props => (
  <Consumer>
    {({ actions, state }) => (
      <Component {...props} {...state} actions={actions} />
    )}
  </Consumer>
);
