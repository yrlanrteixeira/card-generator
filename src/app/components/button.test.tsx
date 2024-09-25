import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonComponent from "@/app/components/Button";

describe("ButtonComponent", () => {
  test("deve renderizar o botão corretamente", () => {
    render(<ButtonComponent label="Click me" />);
    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });

  test("deve exibir o texto correto no botão", () => {
    render(<ButtonComponent label="Click me" />);
    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toHaveTextContent("Click me");
  });

  test("deve ter a classe 'button-enabled' quando não estiver desabilitado", () => {
    render(<ButtonComponent label="Click me" />);
    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toHaveClass("button-enabled");
    expect(button).not.toBeDisabled();
  });

  test("deve ter a classe 'button-disabled' quando o botão estiver desabilitado", () => {
    render(<ButtonComponent label="BAIXAR CARTÃO" disabled />);
    const button = screen.getByRole("button", { name: /BAIXAR CARTÃO/i });
    expect(button).toHaveClass("button-disabled");
    expect(button).toBeDisabled();
  });

  test("deve chamar a função onClick quando o botão é clicado", () => {
    const onClick = vi.fn();
    render(<ButtonComponent label="Click me" onClick={onClick} />);
    const button = screen.getByRole("button", { name: /Click me/i });
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("não deve chamar a função onClick quando o botão estiver desabilitado", () => {
    const onClick = vi.fn();
    render(<ButtonComponent label="Click me" onClick={onClick} disabled />);
    const button = screen.getByRole("button", { name: /Click me/i });
    button.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});