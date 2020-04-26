import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be to the state!)", () => {
    const component = create(<ProfileStatus status="hi man" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hi man");
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="hi man" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  //   test("after creation span should be displayed with correct status", () => {
  //     const component = create(<ProfileStatus status="hi man" />);
  //     const root = component.root;
  //     const span = root.findByType("span");
  //     expect(span.innerText).toBe("hi man");
  //   });

  test("after creation input should be displayed", () => {
    const component = create(<ProfileStatus status="hi man" />);
    const root = component.root;

    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="hi man" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("hi man");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="hi man" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("hi man");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="hi man" updateUserStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
