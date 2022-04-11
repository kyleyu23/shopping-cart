import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <h1>Cart Page</h1>
            {cart.map(item => (
                <h3>{item.name}</h3>
            ))}
        </div>
    );
}

export default Cart;
