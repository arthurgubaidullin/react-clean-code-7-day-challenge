import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("My Todo Application");
  expect(linkElement).toBeInTheDocument();
});

test("renders submit button", () => {
  render(<App />);
  const submitButton: HTMLButtonElement = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
  expect(submitButton?.textContent).toEqual("Submit");
});
