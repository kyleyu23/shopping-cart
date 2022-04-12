import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Item(props) {
    const { item } = props;
    const [cart, setCart] = useContext(CartContext);

    function addToCart() {
        setCart(prevItems => ([...prevItems, item]));
        console.log(cart);
    }

    return (
        <div className="item">
            <img src={item.image} alt={item.name}></img>
            <div className="container">
                <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="price">{item.price}</p>
                </div>
                <button type="button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Item;
