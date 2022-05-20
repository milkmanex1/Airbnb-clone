import React from "react";
import s from "./Card.module.css";

const Card = ({ src, title, desc, price }) => {
  return (
    <div className={s.card}>
      <img src={src} alt="" />
      <div className={s.cardInfo}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{desc}</div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  );
};

export default Card;
