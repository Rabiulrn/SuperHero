import React from 'react';

const Detail = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.profit * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    // const shipping = total > 0 ? 15 : 0;
    // const tax = (total + shipping) * 10;
    // const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Details and Calculate profit</h3>
            <h5>Total selected Tree: {totalQuantity}</h5>
            <br />
            <p>Estimated profit in 1 year: {total.toFixed(2)}</p>
            <h4>Selected Tree:{props.name}</h4>
       
        </div>
    );
};

export default Detail;