import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoriesContainer from './CategoriesContainer';

describe('<CategoriesContainer />', () => {
  test('it should mount', () => {
    render(<CategoriesContainer />);
    
    const categoriesContainer = screen.getByTestId('CategoriesContainer');

    expect(categoriesContainer).toBeInTheDocument();
  });
});