import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders page with all required links', () => {
  render(<App />);
  const tailwindLinkElement = screen.getByText(/View Tailwindcss Docs/i);
  const expressLinkElement = screen.getByText(/View Expressjs Docs/i);
  const githubLinkElement = screen.getByText(/Github/i);

  expect(tailwindLinkElement).toBeInTheDocument();
  expect(expressLinkElement).toBeInTheDocument();
  expect(githubLinkElement).toBeInTheDocument();
});
