import React from "react";
import styles from "../../styles/Header.module.scss";
import Image from "next/link";
import Link from "next/link";


const Header = () => {
  return (
    <div id="home" className={styles.container}>
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
      <div className={styles.bg_pic2}>
        <img  src='/images/star_bg.png' alt="star"/>
      </div> 
      <div className={styles.bg_hire}>
        <a href='/contact'>
          <img src='/images/hireme.png' alt="hireme" />
        </a>
        <Link href='/contact'>
          <img src='/images/frame.png' alt="hireme" />
        </Link>
      </div>
      <div className={styles.bg_pic}>
        <img src='/images/bgpic.png' alt="bgpic" />
      </div>  
      <div className={styles.bg_pic1}>
        <img src='/images/group.png' alt="points"/>
      </div> 
      <div className={styles.bg_twitter}>
        <Link href='http://twitter.com/omerycll'>
         <img src='/images/twitter.png' alt="twitter" />
        </Link>
      </div>
      <div className={styles.bg_facebook}>
        <Link href='http://facebook.com/'>
         <img src='/images/facebook.png' alt="facebook" />
        </Link>
      </div>
    </div>
  );
};

export default Header;