import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Rating from "../components/Rating";
import data from "../data"
import { useState, useEffect } from "react";
import Axios from "axios";


export default function AddProduct() {

  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState(0);
  const [brand, setbrand] = useState("");
  const [rating, setrating] = useState(0);
  const [description, setdescription] = useState("");
  const [numReviews, setnumReviews] = useState(0);

 

  const createProduct = () => {
    Axios.post("http://localhost:3001/createUser", {
        name : name ,
        category : category,
        price : price ,
        brand : brand,
        numReviews : numReviews,
        rating : rating,
        description : description
    })
    
    ;
    
  };
    
    return (
      <div className="row center">
       <Link to="/">Back to result</Link>
         <div className="row top">
          <div className="col-1">
            <div className="card card-body">
              
                
                  <div className="row">
                  
                        <form >
                            <div>
                                <label for="name">Nom :</label>
                                <input type="text" id="name" name="product_name" onChange={(event)=>{setname(event.target.value)}} />
                                
                            </div>
                            <div>
                                <label for="category">Category:</label>
                                <input type="text" id="category" name="product_category" onChange={(event)=>{setcategory(event.target.value)}}/>
                            </div>
                         
                            <div>
                                <label for="price">Price :</label>
                                <input type="number" id="price" name="product_price" onChange={(event)=>{setprice(event.target.value)}} />
                            </div>
                            <div>
                                <label for="brand">Brand :</label>
                                <input type="text" id="brand" name="product_brand" onChange={(event)=>{setbrand(event.target.value)}} />
                            </div>
                            <div>
                                <label for="rating">Rating :</label>
                                <input type="number" id="rating" name="product_rating" onChange={(event)=>{setrating(event.target.value)}} />
                            </div>
                            <div>
                                <label for="numReviews">NumReviews :</label>
                                <input type="number" id="numReviews" name="product_numReviews" onChange={(event)=>{setnumReviews(event.target.value)}} />
                            </div>
                            <div>
                                <label for="description">Description :</label>
                                <input id="description" name="product_description" onChange={(event)=>{setdescription(event.target.value)}}></input>
                            </div>
                            <div>
                                <input type="submit" onClick={createProduct} value="Add product" />
                            </div>

                        </form> 

                  </div> 
            </div>
          </div>
        </div>
      </div>
    )
   
  
 };
 