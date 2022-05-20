import React, { useState } from "react";
import s from "./Banner.module.css";
import Button from "@mui/material/Button";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className={s.banner}>
      <div className={s.bannerSearch}>
        {showSearch && <Search />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className={s.bannerSearchBtn}
          variant="outlined"
          sx={{ color: "rgb(255, 97, 97)", background: "white" }}
        >
          <span>{showSearch ? "Hide" : "Search Dates"}</span>
        </Button>
      </div>
      <div className={s.bannerInfo}>
        <h1>Get out and stretch your imagination.</h1>
        <h5>
          Plan a different kind of getaway to uncover hidden gems near you.
        </h5>
        {/* <Button onClick={() => navigate('/search')} variant="contained">Explore Nearby</Button> */}
        {/* What is the difference bwteen Link and useNavigate()? To find out... */}
        <Link to="/search">
          <Button variant="contained">Explore Nearby</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
