import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckoutItem from './CheckoutItem';

describe('<CheckoutItem />', () => {
    test('it should mount', () => {
        render(
            <CheckoutItem
                cartItem={{
                    id: 0,
                    name: '',
                    price: 0,
                    imageUrl: '',
                    quantity: 0,
                }}
            />
        );

        const checkoutItem = screen.getByTestId('CheckoutItem');

        expect(checkoutItem).toBeInTheDocument();
    });
});
