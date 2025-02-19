// App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import Link and Routes

// Lazy load pages/components not needed at first paint
const MainSpa = lazy(() => import("./pages/spa/Sap"));


const App = () => {
  return (
    <BrowserRouter basename="/DepoDart.ai" 
      future={{
          v7_startTransition: true, 
          v7_relativeSplatPath: true 
        }}>  
      <Routes>
      <Route index element={<MainSpa />} />
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
    </BrowserRouter>
  );
};

export default App;
