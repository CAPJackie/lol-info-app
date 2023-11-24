"use client";
import { Button, InputBase, Paper } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { Slide } from "react-awesome-reveal";
import search from "../../../public/images/search.svg";
import styles from "./Search.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Search: FunctionComponent = () => {
  const { push } = useRouter();
  const [summonerName, setSummonerName] = useState("");

  const handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void = (event) => {
    event.preventDefault();
  };

  const handleEnterKey: (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void = (event) => {
    if (event.key === "Enter") {
      push("/search/summoners/" + summonerName);
    }
  };

  return (
    <Slide direction="down" triggerOnce={true} duration={500}>
      <Paper className={styles.paper} aria-label="Search a summoner name">
        <InputBase
          id="search-summoner-input"
          value={summonerName}
          onChange={handleChange}
          placeholder="Summoner name..."
          aria-describedby="Search a summoner name"
          onKeyDown={handleEnterKey}
        />
        <Button onClick={handleSubmit}>
          <Link href={`summoners/${summonerName}`}>
            <Image src={search} alt="icon button" />
          </Link>
        </Button>
      </Paper>
    </Slide>
  );
};

export default Search;
