import React from "react";
import { render } from "@testing-library/react";
import Cardcarousel from "../src/components/Cardcarousel.jsx";
import '@testing-library/jest-dom'

test("renders correctly", () => {
const { asFragment } = render(<Cardcarousel />);
expect(asFragment()).toMatchSnapshot();
});

test("renders left and right buttons when appropriate", () => {
const { getByText } = render(<Cardcarousel />);
expect(getByText(/<FaCaretLeft/i)).toBeInTheDocument();
expect(getByText(/<FaCaretRight/i)).toBeInTheDocument();
});

test("left button is disabled when at the leftmost position", () => {
const { getByText } = render(<Cardcarousel />);
const leftButton = getByText(/<FaCaretLeft/i);
expect(leftButton).toBeDisabled();
});

test("right button is disabled when at the rightmost position", () => {
const { getByText } = render(<Cardcarousel />);
const rightButton = getByText(/<FaCaretRight/i);
expect(rightButton).toBeDisabled();
});

test("clicking left button scrolls to the left", () => {
const { getByText } = render(<Cardcarousel />);
const leftButton = getByText(/<FaCaretLeft/i);
leftButton.click();
expect(leftButton).toBeDisabled();
});

test("clicking right button scrolls to the right", () => {
const { getByText } = render(<Cardcarousel />);
const rightButton = getByText(/<FaCaretRight/i);
rightButton.click();
expect(rightButton).toBeDisabled();
});