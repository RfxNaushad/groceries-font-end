import React, { useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./Orders.css";

const dateFormat = require("dateformat");

const Orders = () => {
    const { value, value2 } = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [buyProduct, setbuyProduct] = value2;
    const [ Orders , setOrders] = useState([])
    useEffect(()=>{
        const url = `https://mighty-ravine-41968.herokuapp.com/showorders`;
           fetch(url)
           .then(res => res.json())
           .then(data => setOrders(data))
        },[])
       // console.log(Orders);
      const order = Orders.find(od => od.email === loggedInUser.email)

    return (
        <div className="orders">
             {
                 Orders.map(od => <div>
                     <p>Hello! Good Day <span id="customer">{order.name}</span></p>
                     <p>Your E-mail : <span id="email">{order.email}</span></p>
                     <p>Your Order : <span id="product">{order.productName}</span></p>
                     <p>Cost : $ <span id="price">{order.Price}</span></p>
                     <p>Order Placed on : <span id="date">{dateFormat(order.orderTime, "dd-mm-yyyy")}</span></p>
                     </div>)
             }           
        </div>
    );
};

export default Orders;