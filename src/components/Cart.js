import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
    const [cart, setCart] = useContext(CartContext);
    const subtotal = 666666;
    return (
        <div className='cart'>
            {cart.map(item => (
                <div className='cart-item'>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            ))}
            <div className='subtotal'>
                <h1>Subtotal</h1>
                <p>{subtotal}</p>
            </div>
            <button type='button'>Check Out</button>
        </div>
    );
}

export default Cart;
