import React from "react";
import { Icon } from "antd";
import { Slide } from "react-awesome-reveal";
import riotGames from "../../../public/images/riotGames.png";
import "./Footer.css";
import {
  githubBranchRepository,
  riotGamesDevelopers,
} from "../../utils/Constants/urls";
const Footer = () => {
  return (
    <Slide direction="up">
      <footer className="footer-container">
        <nav>
          <h3 aria-label="League of legends master">lol master</h3>
          <ul>
            <li>
              <a
                aria-label="Github repository link"
                href={githubBranchRepository}
              >
                <Icon type="github" theme="outlined" />
              </a>
            </li>
            <li>
              <a href={riotGamesDevelopers}>
                <img alt="Riot games developers portal" src={riotGames} />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </Slide>
  );
};

export default Footer;
