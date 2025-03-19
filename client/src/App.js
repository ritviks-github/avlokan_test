// App.js
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './screens/Home';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Search from './screens/Search';
import CartProvider from './context/CartProvider';
import Cart from './screens/Cart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Q9z95L1tdQPEzpy8Rgxb8Ig0OkUPsl7eQbzbKdlOvnarMK2U0V12Xy8X9aztt43HbXWlUSgNZ6kLIE1ZJJapx1w00OYAekL1l'); // Using the Publishable Key



function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [location]); 
  const price = localStorage.getItem("checkoutAmount");
  return (
    <Elements stripe={stripePromise}>
    <CartProvider>
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          
        </Routes>
      )}
    </div>
    </CartProvider>
    </Elements>
  );
}

export default App;
