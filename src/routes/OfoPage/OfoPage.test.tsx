import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OfoPage from './OfoPage';

describe('<OfoPage />', () => {
  test('it should mount', () => {
    render(<OfoPage />);
    
    const ofoPage = screen.getByTestId('OfoPage');

    expect(ofoPage).toBeInTheDocument();
  });
});