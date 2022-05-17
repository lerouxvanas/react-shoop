import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ofo from './Ofo';

describe('<Ofo />', () => {
  test('it should mount', () => {
    render(<Ofo />);
    
    const ofo = screen.getByTestId('Ofo');

    expect(ofo).toBeInTheDocument();
  });
});