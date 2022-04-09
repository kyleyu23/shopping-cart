import { Link } from "react-router-dom";
import '../App.css'

function Nav() {
    const navStyle = {
        color: '#a4c2ff',
        textDecoration: 'none'
    };

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
            </ul>

        </nav>
    );
}

export default Nav;
