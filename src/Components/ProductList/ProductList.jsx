import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/data/MyContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, fetchAllProducts, filteredProducts, searchQuery } = useContext(MyContext);

  
  const [whatToDisplay, setWhatToDisplay] = useState([]);

  useEffect(() => {

    if (products.length === 0) {
      fetchAllProducts();
    }

    if (filteredProducts.length > 0) {
      setWhatToDisplay(filteredProducts);
    } else if (searchQuery.length > 0) {
      setWhatToDisplay(products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setWhatToDisplay(products);
    }
  }, [products, filteredProducts, searchQuery]);

  return (
    <div>
      <div className="allProductWrapper">
        
        {whatToDisplay.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
            className="singleProduct"
          >
            <div className="thumbnail">

            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "180px", height: "180px" }}
              />
            </div>
            <div className="infodiv">

            <p>
              <strong>ID:</strong> {product.id}
            </p>
            <p>
              <strong>Name:</strong> {product.title}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <Link to={`/product/${product.id}`} style={{margin:"10px"}} className="ViewMoreDetails">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
