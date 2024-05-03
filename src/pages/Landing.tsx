import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MiddleFeature from "../components/MiddleFeature";
import NavbarComp from "../components/Navbar";
import { text } from "../content/text";

const Landing = () => {
  return (
    <>
      <NavbarComp />
      <Hero />
      <Features
        imageTitle="Designed for the future"
        title={text.title1}
        para={text.para1}
        img="./images/illustration-editor-mobile.svg"
        imgDesktop="./images/illustration-editor-desktop.svg"
        title2={text.title2}
        para2={text.para2}
        bottomPadding={250}
      />
      <MiddleFeature />
      <Features
        title={text.title4}
        para={text.para4}
        img="./images/illustration-laptop-mobile.svg"
        imgDesktop="./images/illustration-laptop-desktop.svg"
        title2={text.title5}
        para2={text.para5}
        bottomPadding={94}
      />
      <Footer />
    </>
  );
};

export default Landing;
