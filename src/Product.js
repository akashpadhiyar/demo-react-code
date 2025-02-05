import React from 'react';
import { useParams } from 'react-router-dom';
function Product() {
    const {id} = useParams()
    return ( <>
    <h1>Product id is : {id}</h1>
    </> );
}

export default Product;