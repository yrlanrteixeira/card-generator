import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import '@testing-library/jest-dom';
import CardComponent from '@/app/components/Card';

describe('CardComponent', () => {
  it('deve renderizar corretamente as informações do usuário', () => {
    render(<CardComponent name="Debug Teixeira" phone="(31) 99999-9999" email="debug.teixeira@email.com" />);

    const name = screen.getByText("Debug Teixeira");
    const phone = screen.getByText("(31) 99999-9999");
    const email = screen.getByText("debug.teixeira@email.com");

    expect(name).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
