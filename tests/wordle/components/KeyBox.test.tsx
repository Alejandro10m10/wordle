import { fireEvent, render, screen } from "@testing-library/react";
import { KeyBox } from "../../../src/wordle/components";
import { SpecialCharacter } from "../../../src/wordle/enums";
import "@testing-library/jest-dom";

describe("Tests on <KeyBox />", () => {
  test("should render a regular character key", () => {
    const { container } = render(
      <KeyBox keyValue="A" onKeyClicked={jest.fn()} />
    );
    const span = container.querySelector("span");
    expect(span).toBeTruthy();
    expect(span).not.toBeNull();
    expect(span!.textContent).toBe("A");
    expect(span).toHaveClass("text-white", "text-lg");
  });

  test("should render Enter key with SVG icon", () => {
    const { container } = render(
      <KeyBox keyValue={SpecialCharacter.Enter} onKeyClicked={jest.fn()} />
    );
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toBeInTheDocument();
  });

  test("should render Backspace key with SVG icon", () => {
    const { container } = render(
      <KeyBox keyValue={SpecialCharacter.Backspace} onKeyClicked={jest.fn()} />
    );
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toBeInTheDocument();
  });

  test("should apply correct padding for special characters", () => {
    const { container } = render(
      <KeyBox keyValue={SpecialCharacter.Enter} onKeyClicked={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass("px-6.5");
  });

  test("should apply correct padding for regular keys", () => {
    const { container } = render(
      <KeyBox keyValue="B" onKeyClicked={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass("px-3");
  });

  test("should call onKeyClicked function when clicked", () => {
    const handleClick = jest.fn();
    render(<KeyBox keyValue="C" onKeyClicked={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledWith("C");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should blur the button after click", () => {
    render(<KeyBox keyValue="D" onKeyClicked={jest.fn()} />);
    const button = screen.getByRole("button");
    button.focus();
    expect(button).toHaveFocus();
    fireEvent.click(button);
    expect(button).not.toHaveFocus();
  });
});
