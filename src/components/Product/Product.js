import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';



const Product = (props) => {
    const { name, stock, seller, star, price, img } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">

            <div className="img">
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name ">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon
                </small></p>
                <Rating className="p-2"
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star text-warning"
                    readonly
                ></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="add-btn">{cartIcon}add to cart</button>
            </div>

        </div>
    );
};

export default Product;