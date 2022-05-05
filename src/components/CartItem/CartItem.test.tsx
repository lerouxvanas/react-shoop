import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartItem from './CartItem';

describe('<CartItem />', () => {
    test('it should mount', () => {
        render(
            <CartItem
                cartItem={{
                    id: 0,
                    price: 0,
                    name: '',
                    imageUrl: '',
                    quantity: 0,
                }}
            />
        );

        const cartItem = screen.getByTestId('CartItem');

        expect(cartItem).toBeInTheDocument();
    });
});
