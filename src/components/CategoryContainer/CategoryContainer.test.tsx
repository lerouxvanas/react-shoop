import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryContainer from './CategoryContainer';

describe('<CategoryContainer />', () => {
    test('it should mount', () => {
        render(<CategoryContainer title="" description="" route="" />);

        const categoryContainer = screen.getByTestId('CategoryContainer');

        expect(categoryContainer).toBeInTheDocument();
    });
});
