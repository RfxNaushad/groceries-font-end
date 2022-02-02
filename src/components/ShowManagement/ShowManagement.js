import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ShowManagement = () => {
    const [ products , setProducts] = useState([]);
    console.log(products);
    
    useEffect(()=>{
        const url = `https://mighty-ravine-41968.herokuapp.com/showdata`;
           fetch(url)
           .then(res => res.json())
           .then(data => setProducts(data))
        },[])
        
    return (
        <div>
             {
    
            products.map(pd =><ManageProduct pd = {pd} key={pd._id}></ManageProduct>)
 
}                 
        </div>
    );
};

export default ShowManagement;