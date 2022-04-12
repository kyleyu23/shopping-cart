import React from 'react';
import Item from "./Item";
import cars from '../cars';

function Shop() {
    return (
        <div className="shop">
            {cars.map(car => (
                <Item
                    item={car}
                    key={car.name}
                />
            ))}
        </div>
    );
}

export default Shop;
