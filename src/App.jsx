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
// const TerrainLayout = lazy(() => import("./layouts/TerrainLayout"));
// const TerrainPage = lazy(() => import("./pages/terrain/TerrainPage"));
const Footer = lazy(() => import("./components/Footer"));
const Technology = lazy(() => import("./pages/technology/Technology"));
const UseCases = lazy(() => import("./pages/technology/UseCases"));
const About = lazy(() => import("./pages/about/About"));
const Team = lazy(() => import("./pages/about/Team"));
const Knowledge = lazy(() => import("./pages/resources/Knowledge"));
const FAQ = lazy(() => import("./pages/resources/FAQ"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const NotFound = lazy(() => import("./pages/404page"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={`${appStyles.container} top-10`}>
        <Navbar />
        <Routes>
          {/* Main Spa Route */}
          <Route path="/" element={<MainSpa />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />

          <Route element={<ServicesLayout />}>
            <Route path="services/:id" element={<ServicesPage />} />
          </Route>

          <Route element={<CareersLayout />}>
            <Route path="careers" element={<CareersPage />} />
          </Route>

          {/* <Route element={<TerrainLayout />}>
          <Route path="terrain" element={<TerrainPage />} />
        </Route> */}

          {/* Technology Routes */}
          {/* <Route path="technology">
            <Route path="saige" element={<Technology />} />
            <Route path="use-cases" element={<UseCases />} />
          </Route> */}

          {/* About Routes */}
          {/* <Route path="about">
            <Route index element={<About />} />
            <Route path="team" element={<Team />} />
          </Route> */}

          {/* Resources Routes */}
          {/* <Route path="resources">
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="faq" element={<FAQ />} />
          </Route> */}

          {/* Contact Route */}
          <Route path="contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
        <div className="mt-16 pt-8 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-light/70">
              © {new Date().getFullYear()} DepoDart. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-primary-light/70 hover:text-tertiary-light">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-light/70 hover:text-tertiary-light">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
