
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Admin.css";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageUrl] = useState({});

     const onSubmit = data => {

         const productData = {
             productName: data.productname,
             Price: data.productprice,
             imageURL: imageURL   
         };
         document.getElementById("productname").value="";
         document.getElementById("productprice").value="";


         const url = `https://mighty-ravine-41968.herokuapp.com/productupload`;

         fetch(url,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(productData)
         })
        };
// image to third party api 
     const handleUploadImage = event =>{
          const imageData = new FormData();
          imageData.set('key','983ab38f22c0f978b018721a8e3846bb');
          imageData.append('image', event.target.files[0])
    // image post to third-party app

          axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function(response){
              setImageUrl(response.data.data.display_url);
          })
          .catch(function(error){
              console.log(error);
          });
     }


    return (

        <div className="admin-design">
                
                <h1 class="title-design">Admin Panel</h1>

                <div className="product-submit">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Upload Product</h2>
                        
                        <input name="productname" placeholder="Product Name" id="productname" ref={register} />
                        <br></br>
                        <input name="productprice" placeholder="Price" type="number" id="productprice" ref={register} />
                        <br></br>
                        <label for="files"
                        className="upload-pic">Upload Picture</label>
                        <input id="files" style={{visibility:"hidden"}} type="file" onChange={handleUploadImage} />
                        <br></br>
                        <input id="submit_btn" type="submit" />
                    </form>
                </div>
                <div className="management-design">
                            <h2 >Manage Product</h2>
                            <p>(Update/Delete)</p>
                            <Link to="/showmanagement">
                                    <button>Manage Product</button>                    
                            </Link>
                    </div>
         </div>
    );
};

export default Admin;