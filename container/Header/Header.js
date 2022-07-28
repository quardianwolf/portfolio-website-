import React from "react";
import styles from "../../styles/Header.module.scss";
import Image from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <img src='/images/omerheader.png' alt="omerheader"/>
      </div>
      <div className={styles.block}>
        <h1 className={styles.title}>
          <span className={styles.brand}> Hello, I'm Omer</span> 
        </h1>
        <h2 className={styles.subtitle}>
            FRONT-END DEVELOPER
        </h2>
      </div>
      <div className={styles.bg_hire}>
        <img src='/images/hireme.png' alt="hireme" />
      </div>
      <div className={styles.bg_pic}>
        <img src='/images/bgpic.png' alt="bgpic" />
      </div>  
      <div className={styles.bg_pic1}>
        <img src='/images/group.png' alt="points"/>
      </div>  
      <div className={styles.bg_pic2}>
        <img  src='/images/star_bg.png' alt="star"/>
      </div>  
    </div>
  );
};

export default Header;