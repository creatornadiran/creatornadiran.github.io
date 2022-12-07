import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/components/Home';
import '@testing-library/jest-dom'

describe('Home', () => {
  test('renders home page content', () => {
    const { getByText } = render(<Home />);
    const headerElement = getByText(/Hi, my name is/i);
    const nameElement = getByText(/Nadirhan Şahin/i);
    const titleElement = getByText(/I'm a Computer Engineering Student/i);
    const buttonElement = getByText(/View Work/i);

    expect(headerElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
