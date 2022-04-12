import { Link } from "react-router-dom";
import '../App.css'
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const [cart, setCart] = useContext(CartContext);

    return (
        <nav>

            <h3>Logo</h3>

            <ul className='nav-links'>
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/shop" style={navStyle}>
                    <li>Shop</li>
                </Link>
                <Link to="/cart" style={navStyle}>
                    <li>Cart</li>
                </Link>
                <div className='items-in-cart'>{cart.length}</div>
            </ul>

        </nav>
    );
}

export default Nav;
