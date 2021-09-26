//  import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './Garden.css'
import Tree from '../Tree/Tree';

const Garden = () => {
    const [garden, setGarden] = useState([]);
    useEffect(() => {
        fetch('./trees.json')
            .then(res => res.json())
            .then(data => setGarden(data));
    }, []);

    return (
        <div >
            <h1 className='heading'>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
            <hr />
            <hr />
            <div className="garden-container">
                <div className="trees-container">
                    {
                        garden.map(product => <Tree
                            key={product.id}
                            product={product}

                        >
                        </Tree>)
                    }
                </div>
                <div>
                    <h3>No of tree:{garden.length}</h3>

                </div>
            </div>

        </div>
    );
};

export default Garden;