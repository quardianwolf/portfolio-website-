import React, { Children } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.scss';

import Header from '../container/Header/Header';
import Services from '../container/Services/Services';
import About from '../container/About/About';
import ABC from '../container/Portfolio/ABC';
import Testimonials from '../container/Testimonials/Testimonials';
import Footer from '../container/Footer/Footer';



const Layout = ({Children}) => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
    {Children}
    <Header/>
    <Services/>
    <About/>
    <ABC/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout;