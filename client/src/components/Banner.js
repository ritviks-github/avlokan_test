import React from 'react'
import './Banner.css'
import {Link} from 'react-router-dom'


export default function Banner() {
  return (
    <div>
        <div style={{background: "linear-gradient(to bottom, #880085, #630061)",paddingTop:'30px',paddingBottom:'30px',borderBottomLeftRadius:'45px',borderBottomRightRadius:'45px'}}>
          <br /><br />
            <h3 style={{color:'white',fontSize:'32px'}}>Assign</h3>
            <h1 style={{color:'white',fontFamily:'cursive',fontSize:'64px'}}>1</h1>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <Link to='/pooja'><img id='bannerImg'  src="https://cdn.zeptonow.com/production///tr:w-408,ar-408-393,pr-true,f-auto,q-80/inventory/banner/f9791402-b20d-41c5-a3fa-2a1c2e8f44a4.png" alt="" /></Link>
              <Link to='flowers'><img id='bannerImg'  src="https://cdn.zeptonow.com/production///tr:w-408,ar-408-392,pr-true,f-auto,q-80/inventory/banner/8fec2c57-f7b9-49f8-b2e8-19edb185ebc0.png" alt="" /></Link>
              <Link to='/fast'><img id='bannerImg'  src="https://cdn.zeptonow.com/production///tr:w-409,ar-409-393,pr-true,f-auto,q-80/inventory/banner/81e6e8bc-5130-437d-bbf7-2b1cb1c47009.png" alt="" /></Link>
              <Link to='/clean'><img id='bannerImg'  src="https://cdn.zeptonow.com/production///tr:w-409,ar-409-393,pr-true,f-auto,q-80/inventory/banner/e06abfba-31c3-4aa5-9e86-649a5dea4d74.png" alt="" /></Link>
              <Link to='/prasad'><img id='bannerImg'  src="https://cdn.zeptonow.com/production///tr:w-408,ar-408-393,pr-true,f-auto,q-80/inventory/banner/15df4110-230e-4f64-bbd0-bcba004980c3.png" alt="" /></Link>
              
            </div>
        </div>
        <br /><br />
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <Link to='/vegies'><img id='bannerImg2' src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/dcbe6a33-b173-4f0a-9cc6-3afb3e535be7.png" alt="" /></Link>
            <Link to='/clean'><img id='bannerImg2' src="https://cdn.zeptonow.com/production///tr:w-970,ar-970-557,pr-true,f-auto,q-80/inventory/banner/35f02531-6b67-461b-b83e-c436370593e6.png" alt="" /></Link>
            <Link to='/nutrition'><img id='bannerImg2' src="https://cdn.zeptonow.com/production///tr:w-912,ar-912-570,pr-true,f-auto,q-80/inventory/banner/6db78be2-a92f-4ac0-822a-8b20af817f5f-sept_HomePage_Banner" alt="" /></Link>
            <Link to='/hair'><img id='bannerImg2' src="https://cdn.zeptonow.com/production///tr:w-972,ar-972-558,pr-true,f-auto,q-80/inventory/banner/9159f9fc-62f1-4fd1-833e-d50f424c45db.png" alt="" /></Link>
            
        </div>
        
        
    </div>
  )
}
