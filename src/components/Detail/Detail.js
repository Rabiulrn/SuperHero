import React from 'react';
// import ShowName from '../ShowName/ShowName';
import './Detail.css'

const Detail = (props) => {
    const { cart } = props;
console.log(cart)
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
    for (const product of cart) {
       var name=product.name;
    }

    // const shipping = total > 0 ? 15 : 0;
    // const tax = (total + shipping) * 10;
    // const grandTotal = total + shipping + tax;
    return (
        <div className="detail">
            <h3>Details and Calculate profit</h3>
            <hr />
            <h5>Total selected Tree: {totalQuantity}</h5>
            <p><span className="profit">Estimated profit in 1 year:</span>  {total.toFixed(2)}</p>
            <h4>Selected Tree:{name}</h4>
       
        </div>
    );
};

export default Detail;