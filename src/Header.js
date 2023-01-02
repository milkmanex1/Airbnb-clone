import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
//autocomplete components
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import cities from "cities.json";

const Header = () => {
  //results from country/city API
  const [results, setResults] = useState([]);

  async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countryNames = data.map((country) => country.name.common);
    console.log(countryNames);
    setResults(countryNames);
  }
  useEffect(() => {
    getCountries();
  }, []);

  //   useEffect(() => {
  //     const cityData = cities.map((city) => `${city.name}, ${city.country}`);

  //     console.log(cityData);
  //     setResults(cityData);
  //   }, []);

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
        {/* <input className="header-input" type="text" /> */}
        <Stack sx={{ width: 320 }}>
          <Autocomplete
            id="autocomplete"
            options={results}
            sx={{
              width: 320, 
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "100px",
              },
            }}
            noOptionsText={"no available country"}
            renderInput={(params) => <TextField {...params} label="Country" />}
          ></Autocomplete>
        </Stack>
        <div className="header-search-icon">
          <SearchIcon></SearchIcon>
        </div>
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
