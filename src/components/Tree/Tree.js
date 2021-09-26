import React from 'react';
import './Tree.css'
const Tree = (props) => {
    console.log(props.product);
    const { name, image } = props.product;
    return (
        <div>
            <div className="row container tree">
                <div className="col-lg-11">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="card h-100">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Name : {name}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card h-100">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card h-100">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                        </div>
                    </div>
                  
                </div>
            </div>
         

            {/* <h1>THis is tree</h1>
            <h2>name : {name}</h2>
            <img src={image} alt="" /> */}
        </div>
    );
};

export default Tree;