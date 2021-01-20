import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("renders welcome message", () => {
    render(<App />);
    expect(screen.getByText("Hello tests !!!")).toBeInTheDocument();
  });
});
