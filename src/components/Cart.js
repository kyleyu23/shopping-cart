import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
    const [cart, setCart] = useContext(CartContext);
    const subtotal = getSubtotal()

    function getSubtotal() {
        let result = 0;
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index].price;
            result += element;
        }
        return result;
    }

    return (
        <div className='cart'>
            {cart.map(item => (
                <div className='cart-item'>
                    <h3>{item.name}</h3>
                    <p className='price'>{item.price.toLocaleString(undefined, 0)}</p>
                </div>
            ))}
            <div className='subtotal'>
                <h2>Subtotal</h2>
                <p className='price'>{subtotal.toLocaleString(undefined, 0)}</p>
            </div>
            <button type='button'>Check Out</button>
        </div>
    );
}

export default Cart;
