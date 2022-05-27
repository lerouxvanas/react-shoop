import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Autocomplete from './Autocomplete';

describe('<Autocomplete />', () => {
    test('it should mount', () => {
        render(
            <Autocomplete
                disablePortal={true}
                id="combo-box-demo"
                options={[]}
                sx={{ width: 300 }}
            />
        );

        const autocomplete = screen.getByTestId('Autocomplete');

        expect(autocomplete).toBeInTheDocument();
    });
});
