import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // const totoalReducer=(previous, product)=>previous+product.price;
    // const total= cart.reduce(totoalReducer,0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Orderd: {totalQuantity}</h5>
            <br />
            <h4>Total: ${total.toFixed(2)}</h4>
            <p>Shipping: ${shipping}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            {props.children}
        </div>
    );
};

export default Cart;