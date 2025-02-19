// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Link and Routes

// Lazy load pages/components not needed at first paint
const MainSpa = lazy(() => import("./pages/spa/Sap"));
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MainSpa />} />
        <Route path="/" element={<MainSpa />} />

        {/* 
            <Route path="about" element={<About />} />

            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts">
              <Route index element={<ConcertsHome />} />
              <Route path=":city" element={<City />} />
              <Route path="trending" element={<Trending />} />
            </Route> 
        */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

