import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  StarsCanvas, 
  Works, 
  Footer 
  } from './components';
import { appStyles } from './style';
import { ThemeContext } from './context/ThemeContext';
const App = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <BrowserRouter basename="/DepoDart.ai"
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
    >
          <div className={appStyles(currentTheme).container}>
            <div className={appStyles(currentTheme).heroSection}>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Works />
            <div className={appStyles(currentTheme).contactSection}>
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />
          </div>
    </BrowserRouter>
  );
};

export default App;
