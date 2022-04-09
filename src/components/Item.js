

function Item(props) {
    const item = props.item;
    return (
        <div className="item">
            <img src={item.image} alt={item.name}></img>
            <div className="container">
                <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="price">{item.price.toLocaleString(undefined, 0)}</p>
                </div>
                <button type="button">Add to Cart</button>
            </div>
        </div>
    );
}

export default Item;
