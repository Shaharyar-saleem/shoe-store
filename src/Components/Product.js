import React from 'react';
import Shoes from '../Shoes.json';
import { Link } from 'react-router-dom'; 

function Product(){
    return(
        <div>
            <h1>Avalible Products</h1>
            <div className="productContainer">
            {Object.keys(Shoes).map(keyName => {
                const Shoe = Shoes[keyName];
                return(
                    <div>
                    <Link to={`/Product/${keyName}`}>
                    <h3 key={keyName}>{Shoe.name}</h3>
                    <img src={Shoe.img} class="" alt="" height={150} />
                    </Link>
                    </div>
            )} )}
            </div>
        </div>
    );
}

export default Product;