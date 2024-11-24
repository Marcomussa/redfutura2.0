import React from "react";
import "../public/styles/Home.css";
import "../public/styles/Background.css"
import "../public/styles/Button.css"
import "../public/styles/Styleswiper.css"
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import LearnMore from "../components/LearnMore";
import Services from "../components/Services";
import Category from "../components/Category";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <LearnMore></LearnMore>
    <Services></Services>
    <Category></Category>
    <AboutUs></AboutUs>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
};

export default Home;
