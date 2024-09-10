import React from "react";
import "./App.css";

function Card(props) {
  return (
  
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="my__pic" className="class__img" />
          <div className="card__info">
            <span className="card__categry">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    
  );
}

export default Card;
