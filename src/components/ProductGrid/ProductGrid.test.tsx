import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductGrid from './ProductGrid';

describe('<ProductGrid />', () => {
  test('it should mount', () => {
    render(<ProductGrid />);
    
    const productGrid = screen.getByTestId('ProductGrid');

    expect(productGrid).toBeInTheDocument();
  });
});