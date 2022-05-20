import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* //this is better than a tags, cos it doesn't refresh the page */}
      <Link to="/">
        <img
          className="header-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt=""
        />
      </Link>

      <div className="header-center">
        <input type="text" />
        <SearchIcon></SearchIcon>
      </div>

      <div className="header-right">
        <p>Become a Host</p>
        <div className="language">
          <LanguageIcon></LanguageIcon>
          <ExpandMoreIcon></ExpandMoreIcon>
        </div>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default Header;
