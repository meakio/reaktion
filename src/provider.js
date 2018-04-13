import React, { Component } from "react";
import { Provider as ContextProvider } from "./context";

export default class Provider extends Component {
  constructor(props = { initialState: {}, actions: {} }) {
    super(props);
    this.state = { ...props.initialState };
  }

  mapActions = () =>
    Object.keys(this.props.actions).reduce(
      (acc, key) => ({
        ...acc,
        [key]: this.createAction(this.props.actions[key])
      }),
      {}
    );

  createAction = actionDefinition => (...args) => {
    const newState = actionDefinition(this.state, ...args);
    this.setState(newState);
  };

  render() {
    const actions = this.mapActions();
    const value = { actions, state: this.state };

    return (
      <ContextProvider value={value}>{this.props.children}</ContextProvider>
    );
  }
}
