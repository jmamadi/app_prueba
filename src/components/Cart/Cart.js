import React, { useContext } from 'react';
import { CartContextProvider } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContextProvider);

    return (
        <>
            <p>asdasdasd</p>
        </>
    );
};

export default Cart;
