import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { GuessKeyBox } from "../../../src/wordle/components";
import { GuessKeyBoxProps } from "../../../src/wordle/types";
import "@testing-library/jest-dom";

const baseProps: GuessKeyBoxProps = {
  row: 0,
  column: 0,
  onKeyBoxClicked: jest.fn(),
  keyBoxSelected: { row: 0, column: 0 },
  wordGuessingArr: ["H"],
  wordsGuessingArr: [],
  wordToGuess: "HELLO",
  animationDelay: 0,
  animatedRow: 0,
};

describe("test on <GuessKeyBox />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("should render correctly with the letter from wordGuessingArr", async () => {
    render(<GuessKeyBox {...baseProps} />);

    await waitFor(() => {
      screen.debug();
      expect(screen.getByText("H")).toBeInTheDocument();
    });
  });

  test("should set tabIndex only if keyBox is selected", () => {
    const { rerender } = render(<GuessKeyBox {...baseProps} />);
    expect(screen.getByRole("guessBox")).toHaveAttribute("tabIndex", "0");

    rerender(
      <GuessKeyBox {...baseProps} keyBoxSelected={{ row: 1, column: 1 }} />
    );
    expect(screen.getByRole("guessBox")).not.toHaveAttribute("tabIndex");
  });

  test("should call onKeyBoxClicked when clicked and it's the current guess row", () => {
    render(<GuessKeyBox {...baseProps} />);
    const box = screen.getByRole("guessBox");
    fireEvent.click(box);
    expect(baseProps.onKeyBoxClicked).toHaveBeenCalledWith(0, 0);
  });

  test("should not call onKeyBoxClicked if it's not the current guess row", async () => {
    render(<GuessKeyBox {...baseProps} row={1} />);

    await waitFor(() => {
      const box = screen.getByRole("guessBox");
      fireEvent.click(box);
      expect(baseProps.onKeyBoxClicked).not.toHaveBeenCalled();
    });
  });

  test("should apply correct background color after delay", () => {
    const props: GuessKeyBoxProps = {
      ...baseProps,
      wordsGuessingArr: ["H"],
    };

    render(<GuessKeyBox {...props} />);
    const box = screen.getByRole("guessBox");

    // Initially, it should have "box-none"
    expect(box.className).toMatch(/box-none/);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Eventually, the background color class is applied
    expect(box.className).not.toMatch(/box-none/);
  });

  test("should apply box-correct if letter is in the correct position", () => {
    const props: GuessKeyBoxProps = {
      ...baseProps,
      wordsGuessingArr: ["H"],
    };

    render(<GuessKeyBox {...props} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const box = screen.getByRole("guessBox");
    expect(box.className).toMatch(/box-correct/);
  });

  test("should apply box-absent if letter is not in word", () => {
    const props: GuessKeyBoxProps = {
      ...baseProps,
      wordsGuessingArr: ["Z"],
      wordGuessingArr: [],
      keyBoxSelected: { row: 0, column: 0 },
    };

    render(<GuessKeyBox {...props} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const box = screen.getByRole("guessBox");
    expect(box.className).toMatch(/box-absent/);
  });

  test("should apply box-present if letter exists but is in wrong position", () => {
    const props: GuessKeyBoxProps = {
      ...baseProps,
      wordsGuessingArr: ["E"],
    };

    render(<GuessKeyBox {...props} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const box = screen.getByRole("guessBox");
    expect(box.className).toMatch(/box-present/);
  });
});
