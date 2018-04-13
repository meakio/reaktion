import React from "react";
import { shallow } from "enzyme";
import connect from "./../consumer";

jest.mock("./../context", () => ({
  Consumer: () => <div id="consumer" />
}));

describe("connect", () => {
  it("should render a Consumer component", () => {
    const Connected = connect(() => <div>Test</div>);
    const wrapper = shallow(<Connected />);

    expect(wrapper.find("Consumer").length).toBe(1);
  });
});
