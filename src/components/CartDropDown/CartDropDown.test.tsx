import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartDropDown from './CartDropDown';

describe('<CartDropDown />', () => {
  test('it should mount', () => {
    render(<CartDropDown />);
    
    const cartDropDown = screen.getByTestId('CartDropDown');

    expect(cartDropDown).toBeInTheDocument();
  });
});