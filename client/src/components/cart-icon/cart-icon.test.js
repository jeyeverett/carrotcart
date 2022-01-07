import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, render, cleanup } from '../../test-utils';
import CartIcon from './cart-icon.component';
import { afterEach } from '@jest/globals';

describe('CartIcon component', () => {
  afterEach(cleanup);
  test('CartIcon component renders', () => {
    render(<CartIcon />);

    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  // test('toggleCartHidden is called when icon is clicked', async () => {
  //   render(<CartIcon />);

  //   screen.debug();

  // userEvent.click(container.firstChild);

  // expect(mockToggleCartHidden).toHaveBeenCalled();
  // });

  // test('itemCount is rendered as text', async () => {
  //   const itemCount = screen.getByText(0);

  //   expect(itemCount).toBe('0');
  // });
});
