import React from "react";
import styles from "./SocialBar.module.css";
import githubIcon from "../../assets/icons/github.svg";
//import linkedinIcon from "../../assets/icons/linkedin.svg";
//import xIcon from "../../assets/icons/x.svg";
import coffeeIcon from "../../assets/icons/coffee.ico";


export const SocialBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/controlremoto" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className={styles.icon} />
      </a>

      <a href="https://buymeacoffee.com/reenignedren" target="_blank" rel="noopener noreferrer">
        <img src={coffeeIcon} alt="Buy Me a Coffee" className={styles.icon} />
      </a>
    </div>
  );
};
