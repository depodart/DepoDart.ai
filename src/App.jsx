// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Link and Routes
import { appStyles } from "./style";

import Loader from "./components/Loader";
// Lazy load pages/components not needed at first paint
const MainSpa = lazy(() => import("./pages/spa/Sap"));
const Navbar = lazy(() => import("./components/Navbar"));
const ServicesLayout = lazy(() => import("./layouts/ServicesLayout"));
const ServicesPage = lazy(() => import("./pages/products/ServicesPage"));
const CareersLayout = lazy(() => import("./layouts/CareersLayout"));
const CareersPage = lazy(() => import("./pages/careers/CareersPage"));
const App = () => {
  return (
    <>
      <div className={`${appStyles.container} top-10`}>
    {/* <Suspense fallback={<CanvasLoader/>}> */}
    <Suspense fallback={<Loader/>}>
    
      <Navbar />
      <Routes>
        <Route index element={<MainSpa />} />
        <Route element={<ServicesLayout />}>
          <Route path="services/:id" element={<ServicesPage />} />
        </Route>

        <Route element={<CareersLayout />}>
          <Route path="careers" element={<CareersPage />} />
        </Route>

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
      </Suspense>
      </div>
    </>
  );
};

export default App;

