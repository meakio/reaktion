import React, { Component } from "react";
import { Context } from "./context";

export default class Provider extends Component {
  constructor(props = { initialState: {} }) {
    super(props);

    this.state = { ...props.initialState };
  }

  changeState = storeKey => newValue => {
    if (storeKey) {
      const newState = { [storeKey]: newValue };

      return this.setState(newState);
    }

    return this.setState(newValue);
  };

  render() {
    const value = {
      changeState: this.changeState,
      state: this.state
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
