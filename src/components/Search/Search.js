/* eslint-disable react/no-find-dom-node */
import { Button, InputBase, Paper } from "@material-ui/core";
import { Link, navigate } from "@reach/router";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import search from "../../../public/images/search.svg";
import "./Search.css";

const Search = ({ children }) => {
  const [summonerName, setSummonerName] = useState("");

  const handleChange = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      navigate("/search/summoners/" + summonerName);
    }
  };

  return (
    <>
      <Slide direction="down" triggerOnce duration={500}>
        <Paper
          className="search-section-container"
          aria-label="Search a summoner name"
        >
          <InputBase
            id="search-summoner-input"
            value={summonerName}
            onChange={handleChange}
            placeholder="Summoner name..."
            aria-describedby="Search a summoner name"
            onKeyDown={handleEnterKey}
          />
          <Button onClick={handleSubmit}>
            <Link to={`summoners/${summonerName}`}>
              <img src={search} alt="icon button" />
            </Link>
          </Button>
        </Paper>
      </Slide>

      {children}
    </>
  );
};

export default Search;
