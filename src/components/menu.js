import React from 'react';
import Button from './buttons';
import '../style.css';

export default function Menu({ onClick, className, key, id, name, price, flavor, complement, img }) {
  return (
    <>
      <div className={className} key={key} id={id} price={price}>
        <h1 className="" > {id} {name}  </h1>
        <h1 className="">{flavor} {complement} </h1>
        <img src={img} className="productsImage" alt="apple"></img>
        <h1 className="" >  R${price},00</h1>

        <Button onClick={onClick} className="button buttonAdd" text="+" />
      </div>
    </>
  );
}