
import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../context/data/MyContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products, fetchAllProducts } = useContext(MyContext);
  // const { products, addToCart } = useContext(MyContext);
  console.log(products);

  // const singlePrduct = products.find(product => product.id === id);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.title}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
