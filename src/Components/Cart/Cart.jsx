import React, { useContext } from 'react';
import { MyContext } from '../../context/data/MyContext';
import "../../App.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(MyContext);
 console.log(cart);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product,index) => (
            <div key={index} className="cart-item">
              <img src={product.thumbnail} alt={product.title} style={{ width: '100px', height: '100px' }} />
              <div>
                <p><strong>Name:</strong> {product.title}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
