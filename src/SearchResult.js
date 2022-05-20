import React from "react";
import s from "./SearchResult.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const SearchResult = ({ img, location, title, desc, star, price, total }) => {
  return (
    <div className={s.result}>
      <div className={s.left}>
        <img src={img} alt="" />
        {/* <FavoriteBorderIcon className={s.hearts}></FavoriteBorderIcon> */}
      </div>

      <div className={s.right}>
        <div className={s.hearts}>
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </div>
        <div className={s.top}>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{desc}</p>
        </div>

        <div className={s.bot}>
          <div className={s.stars}>
            <StarIcon sx={{ color: "red" }}></StarIcon>
            <h3>{star}</h3>
          </div>
          <div className={s.price}>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
