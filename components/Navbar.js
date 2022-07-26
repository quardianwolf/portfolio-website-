import React, { useState } from "react";
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss';
import Image from 'next/dist/client/image';
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.app__navbar}>
    <div className={styles.app__navbar_logo}>
    <a href="/">
      <img  src='/images/omerlogo.png' alt="logo" />
     </a>
    </div>
    <ul className={styles.app__navbar_links}>
      {["home", "about", "work", "skills", "contact",].map((item) => (
        <li className={styles.app__flex } key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>

    <div className={styles.app__navbar_menu}>
        
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
      }

export default Navbar;