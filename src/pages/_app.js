/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";
import Head from "next/head";
import ProgressScroll from "../components/Progress-Scroll";
import emailjs from '@emailjs/browser';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return ( 
    <>
        <Head>
        <title> Diatrada OU </title> 
        <meta name = "viewport"
        content = "width=device-width, initial-scale=1, maximum-scale=1" />
		<link rel="canonical" href="https://www.diatradaou.com"/>
		<link rel="icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" href="/icon.png" />
        </Head>

        <Component {...pageProps }/> 
		{/* <ProgressScroll /> */}
        <Script strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js"></Script>
        <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
        <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
        <Script strategy="beforeInteractive"src="/js/simpleParallax.min.js"></Script>
        <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
        {/* <Script strategy="beforeInteractive" src="/landing-preview/js/parallax.min.js"></Script> */}
        <Script strategy="lazyOnload" src="/js/main.js"></Script>
    </>
    );
}

export default MyApp;