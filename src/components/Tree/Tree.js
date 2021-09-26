import React from 'react';
import './Tree.css'
const Tree = (props) => {
    console.log(props.product);
    const { name, image, description, type, profit } = props.product;
    return (
        <div>
                <div className="card h-100">
                                <img src={image} className="card-img-top tree-image" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name : {name}</h5>
                                    <h6 className="card-title">Type : {type}</h6>
                                    <h6>Expected profit in 1 year : {profit}</h6>
                                    <p className="card-text">Description : {description}</p>
                                    <button
                                     onClick={() => props.handleAddToCart(props.product)}
                                    >Calculate</button>
                                </div>
                            </div>
           
            {/* <h1>THis is tree</h1>
            <h2>name : {name}</h2>
            <img src={image} alt="" /> */}
        </div>
    );
};

export default Tree;