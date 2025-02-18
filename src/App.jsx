// App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { appStyles } from "./style";

// Lazy load pages/components not needed at first paint
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Works = lazy(() => import("./components/Works"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter
      basename="/DepoDart.ai"
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
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
            <StarsCanvas />
          </div>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
