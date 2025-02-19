
// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"; // Import Link and Routes
import { appStyles } from "../../style";

// Lazy load pages/components not needed at first paint
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Experience = lazy(() => import("./Experience"));
const Hero = lazy(() => import("./Hero"));
const Navbar = lazy(() => import("../../components/Navbar"));
// const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Works = lazy(() => import("./Works"));
const Footer = lazy(() => import("./Footer"));

// const ProjectDetail = lazy(() => import("../../routes/works/ProjectDetail"));

const MainSpa = () => {
  return (
          <div className={appStyles.container}>
            <Suspense fallback={<div>Loading...</div>}>
              <div className={appStyles.heroSection}>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Works />
              <div className={appStyles.contactSection}>
                <Contact />
                {/* <StarsCanvas /> */}
              </div>
              <Footer />
            </Suspense>
          </div>
  );
};

export default MainSpa;

