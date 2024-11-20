// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

import { fireEvent } from "@testing-library/react";

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('+ button exists', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);    
  const incButton = screen.getByRole('button', { name: /\+/i })
  expect(incButton).toBeInTheDocument();  
});

test('- button exists', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);    
  const decButton = screen.getByRole('button', { name: /\-/i })
  expect(decButton).toBeInTheDocument();  
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);  
  const initIncCount = screen.getByText(/0/i);
  const incButton = screen.getByRole('button', { name: /\+/i })
  expect(initIncCount).toBeInTheDocument();
  fireEvent.click(incButton);
  fireEvent.click(incButton);
  const incCount = screen.getByText(/2/i);
  expect(incCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);  
  const initDecCount = screen.getByText(/0/i);
  const decButton = screen.getByRole('button', { name: /\-/i })
  expect(initDecCount).toBeInTheDocument();
  fireEvent.click(decButton);
  fireEvent.click(decButton);
  const decCount = screen.getByText(/-2/i);
  expect(decCount).toBeInTheDocument();
});
