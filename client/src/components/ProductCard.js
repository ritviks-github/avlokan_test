import React, { useContext, useState, useEffect } from 'react';
import './ProductCard.css';
import CartContext from '../context/CartContext';

const ProductCard = ({ product, cartView = false }) => {
  const { cart, setCart, itemQty, setItemQty } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [showMessage, setShowMessage] = useState(false); // State to control the success message display

  useEffect(() => {
    setItemQty(quantity);
  }, [quantity, setItemQty]);

  const handleAddToCart = () => {
    setQuantity(quantity + 1); 
    setCart((prevCart) => {
       return [...prevCart, { ...product, quantity: 1 }];
    });

    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt='' />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ₹{product.price}</p>

      {showMessage && (
        <div className="success-message">
          Item added successfully!
        </div>
      )}

      {quantity === 0 && !cartView ? (
        
        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
      ) : (
        
        <div className="quantity-controls">
          <button onClick={handleAddToCart} className="quantity-btn">Add More</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
