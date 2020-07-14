import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../Shoes.json';

function ProductItem(){
    let { id } = useParams();
    return(
        <div>
             <h1>{Shoes[id].name}</h1> 
             <img src={Shoes[id].img} width={500} height={450}/>
        </div>
    );
}


export default ProductItem;