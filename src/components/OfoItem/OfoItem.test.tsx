import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OfoItem from './OfoItem';

describe('<OfoItem />', () => {
  test('it should mount', () => {
    render(<OfoItem />);
    
    const ofoItem = screen.getByTestId('OfoItem');

    expect(ofoItem).toBeInTheDocument();
  });
});