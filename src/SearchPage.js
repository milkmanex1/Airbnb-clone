import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";

import NumberContext from "./NumberContext";
import { useContext } from "react";

const SearchPage = () => {
  const { number } = useContext(NumberContext);

  return (
    <div className="searchPage">
      <div className="searchPage-info">
        <p>62 stays • 26 august to 30 august • {number} guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <div className="results-container">
        <SearchResult
          img="https://skift.com/wp-content/uploads/2019/04/Lyric-New-Orleans-3-Bed-3-Bath-Apartment.jpg"
          location="Private room in the center of London"
          title="Stay at this spacious Edwardian House"
          desc="1 guest • 1 bedroom • 1 bed • 2 bathrooms • Free Parking • Washing machine"
          star="4.73"
          price="$30 / night"
          total="$117 total"
        ></SearchResult>
        <SearchResult
          img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
          location="Private room in the center of London"
          title="Independant luxury studio apartment"
          desc="2 guest • 3 bedroom • 1.5 bed • 2 bathrooms • Free Parking • Washing machine"
          star="4.3"
          price="$50 / night"
          total="$117 total"
        ></SearchResult>
        <SearchResult
          img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=2500%2C1666"
          location="Private room in the center of London"
          title="Treat yourself like a king"
          desc="1 guest • 1 bedroom • 1 bed • 2 bathrooms • Free Parking • Washing machine"
          star="4.95"
          price="$200 / night"
          total="117 total"
        ></SearchResult>
      </div>
    </div>
  );
};

export default SearchPage;
