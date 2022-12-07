import React from 'react';
import { act } from 'react-dom/test-utils';
import Work from '../src/components/Work';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders the Work component with expected elements', () => {
  act(() => {
    ReactDOM.render(<Work />, container);
  });
  const work = container.querySelector('[name="work"]');
  const cardcarousel = work.querySelector('Cardcarousel');
  
  expect(work).toBeTruthy();
  expect(header).toBeTruthy();
  expect(cardcarousel).toBeTruthy();
});
