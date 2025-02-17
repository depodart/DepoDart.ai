import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Works, Footer } from './components';
import { appStyles } from './style';

const App = () => {
  return (
    <BrowserRouter
      basename="/DepoDart.ai"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className={appStyles.container}>
        <div className={appStyles.heroSection}>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Works />
        <div className={appStyles.contactSection}>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
