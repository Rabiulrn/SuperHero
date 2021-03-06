//  import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './Garden.css'
import Tree from '../Tree/Tree';
import Detail from '../Detail/Detail';

const Garden = () => {
    const [garden, setGarden] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./trees.json')
            .then(res => res.json())
            .then(data => setGarden(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div >
            <h1 className='heading'>List of Profitable Tree</h1>
            <h4 className='heading'>Total profit: 120000</h4>
            <hr className="container" />
            <hr className="container"/>
            <div className="garden-container">
                <div className="trees-container">
                    {
                        garden.map(product => <Tree
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Tree>)
                    }
                </div>
                <div className="cart-container">
                    <Detail cart={cart}></Detail>
                </div>
            </div>

        </div>
    );
};

export default Garden;