import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryPreview from './CategoryPreview';

describe('<CategoryPreview />', () => {
    test('it should mount', () => {
        render(<CategoryPreview title="test" products={[]} />);

        const categoryPreview = screen.getByTestId('CategoryPreview');

        expect(categoryPreview).toBeInTheDocument();
    });
});
