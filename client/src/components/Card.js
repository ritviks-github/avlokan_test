import React from 'react';
import './Card.css'; 

const Card = ({ imageName, name, description,price }) => {
  return (
    <div className="card">
      <img src={imageName} alt={description} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <span>₹ {price}</span>
      </div>
    </div>
  );
};

export default Card;
