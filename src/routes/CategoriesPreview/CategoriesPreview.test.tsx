import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoriesPreview from './CategoriesPreview';

describe('<CategoriesPreview />', () => {
  test('it should mount', () => {
    render(<CategoriesPreview />);
    
    const categoriesPreview = screen.getByTestId('CategoriesPreview');

    expect(categoriesPreview).toBeInTheDocument();
  });
});