import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkout from './Checkout';

describe('<Checkout />', () => {
  test('it should mount', () => {
    render(<Checkout />);
    
    const checkout = screen.getByTestId('Checkout');

    expect(checkout).toBeInTheDocument();
  });
});