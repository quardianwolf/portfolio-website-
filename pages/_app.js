import '../styles/globals.css'
import Layout from '../components/Layout';
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";



const MyApp = ({Component, pageProps}) => {
  

  return (
    <>
   
       <Layout>
        <Component {...pageProps} />
       </Layout>
      
    </>
  );
};

export default MyApp;