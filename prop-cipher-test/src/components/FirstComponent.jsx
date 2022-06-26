import React from 'react';
import './FirstComponent.css';

function FirstComponent({name,author,city,price}) {
  return (
    <div>
        <div className="first">
            <h2>{name}</h2>
            <div className="city-author">
            <p><b>{author}</b></p>
            <p>{city}</p>
            </div>
            <h1>{price}</h1>
            <div className="btn">
                <button>ADD TO CART</button>
                <button>MAKE OFFER</button>
            </div>
        </div>   
    </div>
  )
}

export default FirstComponent