import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CartContext from '../context/CartContext';
import Card from '../components/Card';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';

export default function Cart() {
  
  const clearCart = () => {
    localStorage.removeItem("cart"); 
    setCart([]); 
  };
  const [loading, setLoading] = useState(false); 
    
  const makePayment = async () => {
    setLoading(true); 

    const stripe = await loadStripe("pk_test_51Q9z95L1tdQPEzpy8Rgxb8Ig0OkUPsl7eQbzbKdlOvnarMK2U0V12Xy8X9aztt43HbXWlUSgNZ6kLIE1ZJJapx1w00OYAekL1l");

    const body = {
        products: cart,
    };

    const headers = {
        "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        console.error('Error creating checkout session', response.statusText);
        setLoading(false); 
        return;
    }

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
    });

    setLoading(false); 

    if (result.error) {
        console.error(result.error.message);
    }else{
      clearCart();
    }
    
};

  const { cart, setCart } = useContext(CartContext);


  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((accumulator, product) => {
        const price = Number(product.price) || 0; 
        return accumulator + price; 
      }, 0);

      setTotalPrice(total);
      localStorage.setItem("checkoutAmount", total);
    } else {
      setTotalPrice(0);
      localStorage.setItem("checkoutAmount", 0);
    }
  }, [cart]);

  return (
    <div>
      <Navbar />
      <div>
        <img 
          src="https://t4.ftcdn.net/jpg/04/35/97/43/360_F_435974397_rFGpxTfOolSww3MPhzSM4yAQ6dvXIwQz.jpg" 
          style={{ height: "10vh" }} 
          alt="Shopping Cart Banner" 
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
        <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
        <Link  onClick = {makePayment} className='btn btn-success'>Checkout</Link>
        <span className='btn btn-success'>Total Price: ₹ {totalPrice.toFixed(2)}</span>
      </div>
      <div className="product-carousel">
        {cart.length > 0 ? (
          cart.map((prods) => (
            <Card
              key={prods.id} 
              name={prods.name} 
              imageName={prods.image} 
              description={prods.description} 
              price={prods.price} 
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}
