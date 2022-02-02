import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./ManageProduct.css";

const ManageProduct = (props) => {
    const {productName, Price , _id} = props.pd;

    const handleDelete = (id) =>{

        fetch('https://mighty-ravine-41968.herokuapp.com/delete/' + id,{
           method: "DELETE"
       })
       .then(res => res.json())
       .then(data =>{
             console.log("successfully deleted");
       })
    }


    return (

        <div>
            <Table striped bordered hover>
            <thead>
                    <tr>

                    <th>Product Name</th>
                    <th>Product Prcie</th>
                    <th>Manage Product</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>{productName}</td>
                       <td>{Price}</td>
                       <td>
                        <button className="manage-btn" onClick={() => handleDelete(_id)}>
                              Delete   
                        </button>
                       </td>
                    </tr>
                </tbody>
           </Table>
        </div>
    );
};

export default ManageProduct;