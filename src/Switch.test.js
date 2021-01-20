import * as React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";

describe("Switch component", () => {
  test("should render Switch component with default props", () => {
    const container = render(<Switch />);

    const checkbox = container.getByTestId("Switch-input");
    expect(checkbox).not.toBeChecked();
  });

  test("should toggle on Switch component works correctly", () => {
    const container = render(<Switch />);
    const checkbox = container.getByTestId("Switch-input");

    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("should change checked value when clicking on main label", () => {
    const container = render(<Switch />);
    const mainLabel = container.getByTestId("Switch-input");
    const checkbox = container.getByTestId("Switch-input");

    expect(checkbox).not.toBeChecked();
    userEvent.click(mainLabel);
    expect(checkbox).toBeChecked();
  });

  test("should have proper labels for switch", () => {
    const labelOnText = "Monthly";
    const labelOffText = "Annual";
    const container = render(
      <Switch labelOn={labelOnText} labelOff={labelOffText} />
    );
    const labelOnElement = container.getByText(labelOnText);
    const labelOffElement = container.getByText(labelOffText);

    expect(labelOnElement).toHaveTextContent(labelOnText);
    expect(labelOffElement).toHaveTextContent(labelOffText);
  });

  test("should have proper classes for switch options", () => {
    const labelOnText = "Monthly";
    const labelOffText = "Annual";
    const container = render(
      <Switch checked labelOn={labelOnText} labelOff={labelOffText} />
    );
    const labelOnElement = container.getByText(labelOnText);
    const labelOffElement = container.getByText(labelOffText);

    expect(labelOnElement).toHaveClass("Switch-label--active");
    expect(labelOffElement).not.toHaveClass("Switch-label--active");
  });
});