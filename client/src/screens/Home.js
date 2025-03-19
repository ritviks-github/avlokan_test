import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import axios from 'axios';

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <Banner />
    <br /><br />
   
{/* how it works component starts */}
      <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}>
        <h3>How it Works</h3>
      </div>
      <div style={{ 
  display: 'flex', 
  justifyContent: 'space-around', 
  alignItems: 'center', 
  padding: '20px', 
  backgroundColor: '#f9f9f9' 
}}>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'transform 0.2s',
  }}>
    <img 
      src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.3.1/images/pdp/place-order.svg" 
      alt="" 
      style={{ width: '60px', marginBottom: '15px' }} 
    />
    <h3 style={{ color: '#880085', fontSize: '22px', marginBottom: '10px' }}>Open the App</h3>
    <span style={{ color: '#555', fontSize: '16px', lineHeight: '1.5' }}>
      Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more
    </span>
  </div>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'transform 0.2s',
  }}>
    <img 
      src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.3.1/images/pdp/do-not-blink.svg" 
      alt="" 
      style={{ width: '60px', marginBottom: '15px' }} 
    />
    <h3 style={{ color: '#880085', fontSize: '22px', marginBottom: '10px' }}>Place an Order</h3>
    <span style={{ color: '#555', fontSize: '16px', lineHeight: '1.5' }}>
      Add your favourite items to the cart & avail the best offers
    </span>
  </div>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'transform 0.2s',
  }}>
    <img 
      src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.3.1/images/pdp/enjoy.svg" 
      alt="" 
      style={{ width: '60px', marginBottom: '15px' }} 
    />
    <h3 style={{ color: '#880085', fontSize: '22px', marginBottom: '10px' }}>Get Free Delivery</h3>
    <span style={{ color: '#555', fontSize: '16px', lineHeight: '1.5' }}>
      Experience lightning-fast speed & get all your items delivered in 10 minutes
    </span>
  </div>
</div>
{/* how it works component ends */}
    </div>
  )
}
