import { fireEvent, render, screen } from "@testing-library/react";
import { Keyboard, KeyBox } from "../../../src/wordle/components";
import { KEY_BOARD_ARR } from "../../../src/wordle/constants";
import { SpecialCharacter } from "../../../src/wordle/enums";

jest.mock("../../../src/wordle/components/KeyBox", () => {
  return {
    KeyBox: jest.fn(({ keyValue, onKeyClicked }) => {
      return <button onClick={() => onKeyClicked(keyValue)}>{keyValue}</button>;
    }),
  };
});

const MockedKeyBox = KeyBox as jest.MockedFunction<
  React.FC<{ keyValue: string; onKeyClicked: (key: string) => void }>
>;

describe("test on <Keyboard />", () => {
  test("should renders all keys from KEY_BOARD_ARR", () => {
    const mockOnKeyClicked = jest.fn();
    render(<Keyboard onKeyClicked={mockOnKeyClicked} />);

    const expectedKeys = KEY_BOARD_ARR.flat();

    expect(KeyBox).toHaveBeenCalledTimes(expectedKeys.length);

    const passedKeys = MockedKeyBox.mock.calls.map((call) => call[0].keyValue);
    expect(passedKeys).toEqual(expectedKeys);
  });

  test("should render keyboard rows", () => {
    const mockOnKeyClicked = jest.fn();
    render(<Keyboard onKeyClicked={mockOnKeyClicked} />);

    const rows = screen.getAllByRole("row-group");
    expect(rows.length).toBe(KEY_BOARD_ARR.length);
  });

  test("should call onKeyClicked when a key is clicked (mouse)", () => {
    const mockHandler = jest.fn();
    render(<Keyboard onKeyClicked={mockHandler} />);

    const button = screen.getByRole("button", { name: "A" });
    fireEvent.click(button!);
    expect(mockHandler).toHaveBeenCalledWith("A");
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("should call onKeyClicked when a key is clicked (keyboard)", () => {
    const mockOnKeyClicked = jest.fn();
    render(<Keyboard onKeyClicked={mockOnKeyClicked} />);

    const event = new KeyboardEvent("keydown", { key: "C" });
    window.dispatchEvent(event);

    expect(mockOnKeyClicked).toHaveBeenCalledWith("C");
    expect(mockOnKeyClicked).toHaveBeenCalledTimes(1);
  });

  test("should call onKeyClicked with uppercase when pressing letter key ", () => {
    const mockOnKeyClicked = jest.fn();
    render(<Keyboard onKeyClicked={mockOnKeyClicked} />);

    const event = new KeyboardEvent("keydown", { key: "k" });
    window.dispatchEvent(event);

    expect(mockOnKeyClicked).toHaveBeenCalledWith("K");
    expect(mockOnKeyClicked).toHaveBeenCalledTimes(1);
  });

  test("should call onKeyClicked with same key when pressing special key", () => {
    const mockOnKeyClicked = jest.fn();
    render(<Keyboard onKeyClicked={mockOnKeyClicked} />);

    // Backspace
    const backspaceEvent = new KeyboardEvent("keydown", {
      key: SpecialCharacter.Backspace,
    });
    window.dispatchEvent(backspaceEvent);
    expect(mockOnKeyClicked).toHaveBeenCalledWith(SpecialCharacter.Backspace);
    expect(mockOnKeyClicked).toHaveBeenCalledTimes(1);

    // Enter
    const enterEvent = new KeyboardEvent("keydown", {
      key: SpecialCharacter.Enter,
    });
    window.dispatchEvent(enterEvent);
    expect(mockOnKeyClicked).toHaveBeenCalledWith(SpecialCharacter.Enter);
    expect(mockOnKeyClicked).toHaveBeenCalledTimes(2);
  });

  test("should not call onKeyClicked when pressing invalid key", () => {
    const mockOnKeyClicked = jest.fn();
    render(<Keyboard onKeyClicked={mockOnKeyClicked} />);

    const invalidKeyEvent = new KeyboardEvent("keydown", { key: "!" });
    window.dispatchEvent(invalidKeyEvent);

    expect(mockOnKeyClicked).not.toHaveBeenCalled();
  });
});
