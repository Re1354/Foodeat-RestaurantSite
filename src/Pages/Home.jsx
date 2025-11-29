import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import TopList from "../components/MenuList/TopList";
import OurServices from "../components/OurServices/OurServices";
import BgImage from "../assets/bg.jpg";
import Footer from "../components/Footer/Footer";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div style={bgStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
          <Navbar
            onHomeClick={() => scrollToSection(homeRef)}
            onAboutClick={() => scrollToSection(aboutRef)}
            onContactClick={() => scrollToSection(contactRef)}
          />

          <div ref={homeRef} className="pt-24">
            <Hero />
          </div>
          <div>
            <TopList />
          </div>
          <div ref={aboutRef} className="pt-24">
            <Banner />
          </div>

          <div ref={contactRef} className="pt-24">
            <OurServices />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
