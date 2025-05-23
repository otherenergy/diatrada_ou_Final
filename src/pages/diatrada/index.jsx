/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Main/Header3';
import Clients from '../../components/Main/Clients';
import Services from '../../components/Main/Services3';
import About from '../../components/Main/About2';
import Portfolio from '../../components/Main/Portfolio3';
import Section from '../../components/Main/Section2';
import Testimonials from '../../components/Main/Testimonials3';
import Blog from '../../components/Main/Blog2';
import Footer from "../../components/Footers/DigitalFooter";
import TetherChart from "../../components/TetherChart";
import MultiCriptoChart from "../../components/MultiCriptoChart";
// import MultiCriptoChart2 from "../../components/MultiCriptoChart2";

const DiaTrada = () => {
  useEffect(() => {
    document.body.classList.add('land-demo2');

    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Diatrada OU</title>
		<link rel="canonical" href="https://www.diatradaou.com"/>
      </Head>

      <MainLightLayout defaultTheme={'dark'} defaultLogoTheme="dark" defaultLogoTitle="logotitle">
        <StickyBar />
        <FixedSearch />
        <Header />
        <Clients slides={5} />
        <Services />
        <About />
        <Portfolio />
        <Section />
        {/* <Testimonials /> */}
        {/* <div style={{ display: 'row', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem'}}>
        <TetherChart />
        <TetherChart />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', padding: '40px'}}>
          <div style={{ flex: 1 }}>
            <TetherChart />
          </div>
          <div style={{ flex: 1 }}>
            <TetherChart />
          </div>
        </div> */}
        {/* <TetherChart /> */}
        <MultiCriptoChart/>
        <Blog grblue={true} />
        <Footer footerClass="purple-light-bg position-re pb-40 mt-80" type="purple-light" />
      </MainLightLayout>
    </>
  )
}

export default DiaTrada;