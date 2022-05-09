import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Category from './Category';

describe('<Category />', () => {
  test('it should mount', () => {
    render(<Category />);
    
    const category = screen.getByTestId('Category');

    expect(category).toBeInTheDocument();
  });
});