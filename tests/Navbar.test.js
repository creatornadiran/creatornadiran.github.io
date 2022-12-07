import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../src/components/Navbar';
import '@testing-library/jest-dom'

describe('Navbar', () => {
  test('renders without crashing', () => {
    const { container } = render(<Navbar />);
    expect(container).toBeInTheDocument();
  });

  test('toggles navigation when the hamburger icon is clicked', () => {
    const { container } = render(<Navbar />);
    const hamburgerIcon = container.querySelector('.md:hidden');
    fireEvent.click(hamburgerIcon);

    // Assert that the navigation menu is visible after clicking the hamburger icon
    const navMenu = container.querySelector('.absolute.top-0.left-0.w-full.h-screen.bg-[#0a192f].text-gray-300.flex.flex-col.justify-center.items-center');
    expect(navMenu).toBeVisible();

    fireEvent.click(hamburgerIcon);

    // Assert that the navigation menu is hidden after clicking the hamburger icon again
    expect(navMenu).not.toBeVisible();
  });

  test('navigates to the correct section when a nav item is clicked', () => {
    const { container } = render(<Navbar />);
    const hamburgerIcon = container.querySelector('.md:hidden');
	fireEvent.click(hamburgerIcon);

// Get the navigation item and simulate a click
const navItem = container.querySelector('.py-6.text-4xl a[to="about"]');
fireEvent.click(navItem);

// Assert that the user is navigated to the correct section
const aboutSection = container.querySelector('#about');
expect(aboutSection).toBeInTheDocument();
});
});
