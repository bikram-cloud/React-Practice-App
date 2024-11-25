import React from 'react';
import adventureInfo from '../data/data';
import './page.css';

const MainPage = () => {
  return (
    <>
      {adventureInfo.map(info => (
        <div key={info.id} className="cardList">
          <img src={info.img} className="cardImage" />
          <div className="cardContent">
            <h2 className="cardPrice">{info.price}</h2>
            <h2 className="cardTitle">{info.title}</h2>
            <p className="cardDesc">{info.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainPage;
