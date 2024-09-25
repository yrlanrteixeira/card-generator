import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonComponent from "@/app/components/Button";



describe("Button", () => {
  test("deve renderizar o botão", () => {
    render(<ButtonComponent label="Click me" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("deve ter o texto do botão", () => {
    render(<ButtonComponent label="Click me" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  test("deve ter a classe button-enabled", () => {
    render(<ButtonComponent label="Click me" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-enabled");
  });

  test("deve ter a classe button-disabled", () => {
    render(<ButtonComponent label="Click me" disabled />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-disabled");
  });


});