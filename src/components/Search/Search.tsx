import { Button, InputBase, Paper } from "@material-ui/core";
import { Link, navigate, RouteComponentProps } from "@reach/router";
import React, { FunctionComponent, useState } from "react";
import { Slide } from "react-awesome-reveal";
import search from "../../../public/images/search.svg";
import "./Search.css";

const Search: FunctionComponent<RouteComponentProps> = ({ children }) => {
  const [summonerName, setSummonerName] = useState("");

  const handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void = (event) => {
    event.preventDefault();
  };

  const handleEnterKey: (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void = (event) => {
    if (event.key === "Enter") {
      navigate("/search/summoners/" + summonerName);
    }
  };

  return (
    <>
      <Slide direction="down" triggerOnce={true} duration={500}>
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
