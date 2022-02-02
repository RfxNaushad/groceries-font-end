import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import "./Shop.css";


const Shop = () => {
    const [ products , setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
         const url = `https://mighty-ravine-41968.herokuapp.com/showdata`;
            fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            setLoading(true)
         },[])

    //console.log(products);
    return (
    <div className="background-img">    
          <Container>
    
            <Row >
                {
    
                    loading?(products.map(pd => <Col xs={12} md={4}><Product pd = {pd} key={pd._id}></Product></Col>)): <Spinner animation="border" />
                 
                }                 
            </Row>
        </Container>
    </div>    

    );
};

export default Shop;

