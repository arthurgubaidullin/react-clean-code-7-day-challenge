import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

test("Add todo to list", async () => {
  const id = uuid();
  render(<Todo id={id} />);

  const input = screen.getByTestId(`todo-input-${id}`);

  await act(async () => {
    // eslint, i win!
    await Promise.resolve().then(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });
  });

  expect(screen.getByText("buy some milk")).toBeInTheDocument();
});
