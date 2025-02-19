// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Link and Routes
import { appStyles } from "./style";

// Lazy load pages/components not needed at first paint
const MainSpa = lazy(() => import("./pages/spa/Sap"));
const Navbar = lazy(() => import("./components/Navbar"));
const ServicesLayout = lazy(() => import("./layouts/ServicesLayout"));
const ServicesPage = lazy(() => import("./pages/Services/ServicesPage"));


const App = () => {
  return (
    <>
      <Navbar />
      <div className={`${appStyles.container} top-10`}>
      <Routes>
        <Route index element={<MainSpa />} />
        <Route element={<ServicesLayout />}>
          <Route path="services/:id" element={<ServicesPage />} />
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
      </div>

    </>
  );
};

export default App;

