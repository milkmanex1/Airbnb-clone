import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Link, useNavigate } from "react-router-dom";

import NumberContext from "./NumberContext";
import { useContext } from "react";

const Search = () => {
  const { number, setNumber } = useContext(NumberContext);

  //use today's date for start and endDate
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let navigate = useNavigate();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  //this function sets start date and end date
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  //this function takes in the input number of guests, sends it to NumberContext and navigates to the search page
  const search = () => {
    navigate("/search");
  };

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      ></DateRangePicker>
      <h2>
        Number of guests
        <PersonAddAlt1Icon></PersonAddAlt1Icon>
      </h2>
      <div className="guest-count">
        <input
          type="number"
          min={0}
          defaultValue={2}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button onClick={search} variant="contained">
          Search AirBnb
        </Button>
      </div>
    </div>
  );
};

export default Search;
