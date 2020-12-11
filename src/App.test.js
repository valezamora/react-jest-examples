import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders learn react link', () => {
  // arrange

  // act
  render(<App />);

  // assert
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByTestId('profile-details')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /One click button/i})).toBeInTheDocument();
});
