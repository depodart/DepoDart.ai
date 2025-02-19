
// App.jsx
import React, { Suspense, lazy } from "react";
import { appStyles } from "../../style";

// Lazy load pages/components not needed at first paint
const About = lazy(() => import("./2_About"));
const Contact = lazy(() => import("./5_Contact"));
const Experience = lazy(() => import("./3_Experience"));
const Hero = lazy(() => import("./1_Hero"));
// const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Works = lazy(() => import("./4_Works"));
const Contacts = lazy(() => import("./6_Contacts"));
// const ProjectDetail = lazy(() => import("../../routes/works/ProjectDetail"));

const MainSpa = () => {
    return (
        <div className={appStyles.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={appStyles.heroSection}>
                    <Hero />
                </div>
                <About />
                <Experience />
                <Works />
                <div className={appStyles.contactSection}>
                    <Contact />
                    {/* <StarsCanvas /> */}
                </div>
                <Contacts />
            </Suspense>
        </div>
    );
};

export default MainSpa;

