// src/components/ProductDetails.js
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/data/MyContext";
import "../../App.css";

const ProductDetails = () => {
  const { id } = useParams();

  const { products, addToCart } = useContext(MyContext);
  console.log(addToCart)

  const singlePrduct = products.find(product => Number(product.id)=== Number(id));
  // const [product, setProduct] = useState([]);
  // console.log(products);
  // useEffect(() => {
  //   const foundProduct = products.find((p) => p.id === parseInt(id));
  //   setProduct(foundProduct);
  // }, [id, products]);

  if (!singlePrduct) return <div>Loading...</div>;

  const handleCart = (item) =>{
    addToCart(item)
  }

 console.log(singlePrduct);
  return (
    <div className="productDetails">
      <h2>Product Details</h2>
      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="productImage">
          <img src={singlePrduct.thumbnail} alt={singlePrduct.title} style={{ width: "300px", height: "300px" }} />
        </div>
        <div className="productPreview">
          <p><strong>ID:</strong> {singlePrduct.id}</p>
          <p><strong>Name:</strong> {singlePrduct.title}</p>
          <p><strong>Description:</strong> {singlePrduct.description}</p>
          <p><strong>Category:</strong> {singlePrduct.category}</p>
          <p><strong>Price:</strong> ${singlePrduct.price}</p>
          <div className="cartButton">
            <button onClick={() => handleCart(singlePrduct)}>Add to Cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
