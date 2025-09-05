import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export default function App() {

  useEffect(() => {
    //Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    //Refresh Srolltrigger when the page is fully loaded
    ScrollTrigger.refresh()

    //clean up Srolltrigger on component unmout
    return () => {
ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
    }
  }, [])


  return (
    <Router>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <CustomCursor />
      <Footer />
      <ProgressBar />
    </Router>
  );
}




