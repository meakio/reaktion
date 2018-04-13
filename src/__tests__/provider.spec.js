import React from "react";
import { shallow } from "enzyme";
import Provider from "./../provider";

jest.mock("./../context", () => ({
  Provider: () => <div id="provider" />
}));

const getWrapper = (props = {}) => shallow(<Provider {...props} />);

describe("Provider", () => {
  describe("Provider.constructor", () => {
    it("should have put the initialState props inside the current provider state", () => {
      const initialState = { some: "Props" };
      const instance = getWrapper({ initialState, actions: {} }).instance();
      expect(instance.state).toEqual(initialState);
    });

    it("should have an initial empty state if initialState is not passed as argument", () => {
      const instance = getWrapper({ actions: {} }).instance();
      expect(instance.state).toEqual({});
    });
  });

  describe("Provider.createAction", () => {
    it("should have changed the initialState with a new value", () => {
      // Given
      const actions = {
        changeValue: (state, name) => ({ ...state, someKey: `Hello ${name}` })
      };

      const initialState = {
        someKey: "Hello marvin",
        someOtherKey: "Hello john"
      };

      const instance = getWrapper({ initialState, actions }).instance();

      // When
      const action = instance.createAction(actions.changeValue);
      action("world");

      // Then
      expect(instance.state).toEqual({
        ...initialState,
        someKey: "Hello world"
      });
    });
  });

  describe("Provider.mapActions", () => {
    it("should have changed the initialState with a new value", () => {
      // Given
      const actions = {
        changeValue: (state, name) => ({ ...state, someKey: `Hello ${name}` }),
        changeTitle: (state, name) => ({ ...state, someKey: `Hello ${name}` })
      };

      const initialState = {
        someKey: "Hello marvin",
        someOtherKey: "Hello john"
      };

      const instance = getWrapper({ initialState, actions }).instance();
      instance.createAction = jest.fn();

      // When
      instance.mapActions();

      // Then
      expect(instance.createAction).toHaveBeenCalledTimes(2);
    });
  });

  describe("Provider.render", () => {
    it("should have rendered a component with actions equals to mapActions", () => {
      const actions = {
        changeValue: (state, name) => ({ ...state, someKey: `Hello ${name}` }),
        changeTitle: (state, name) => ({ ...state, someKey: `Hello ${name}` })
      };

      const initialState = {
        someKey: "Hello marvin",
        someOtherKey: "Hello john"
      };

      const wrapper = getWrapper({ initialState, actions });
      const instance = wrapper.instance();
      const mappedActions = instance.mapActions();

      expect(wrapper.find("Provider").length).toEqual(1);
    });
  });
});
