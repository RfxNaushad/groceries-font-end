import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    
     
     const {_id}= useParams();
     const [ products , setProducts] = useState([]);
     const { value, value2 } = React.useContext(UserContext);
     const [loggedInUser, setLoggedInUser] = value;
     const [buyProduct, setbuyProduct] = value2;
    // const [buyProduct, setbuyProduct] = useContext(UserContext);
     //console.log(buyProduct);
     //console.log(loggedInUser);

     const onSubmit = () =>{
              const orderdetails = { ...loggedInUser, ...buyProduct, orderTime: new Date()};

              fetch('https://mighty-ravine-41968.herokuapp.com/addorder',{
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json"
                  },
                  body: JSON.stringify(orderdetails)
              })
              .then(res => res.json())
              .then(data =>{
                  if(data){
                      alert("your order is placed");
                  }
              })
     }
    return (
        <div id="maindiv">
            <p>Product : {buyProduct.productName}</p>
            <p>Quantity : 1</p>
            <p>Price : $ {buyProduct.Price}</p>
            <Button variant="contained" size="small" color="primary" onClick={()=>onSubmit()}>Checkout</Button>
        </div>
    );
};

export default Checkout;