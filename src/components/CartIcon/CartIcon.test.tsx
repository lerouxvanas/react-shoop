import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartIcon from './CartIcon';

describe('<CartIcon />', () => {
  test('it should mount', () => {
    render(<CartIcon />);
    
    const cartIcon = screen.getByTestId('CartIcon');

    expect(cartIcon).toBeInTheDocument();
  });
});