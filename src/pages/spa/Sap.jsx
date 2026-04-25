// Sap.jsx — landing page composition
import { Suspense, lazy } from "react";
import { appStyles } from "../../style";

const Hero = lazy(() => import("./1_Hero"));
const LogoBar = lazy(() => import("./_LogoBar"));
const About = lazy(() => import("./2_About"));
const Experience = lazy(() => import("./3_Experience"));
const Services = lazy(() => import("./4_Services"));
const Personas = lazy(() => import("./_Personas"));
const Contact = lazy(() => import("./5_Contact"));
const FinalCta = lazy(() => import("./_FinalCta"));
const Contacts = lazy(() => import("./6_Contacts"));

const MainSpa = () => {
  return (
    <div className={appStyles.container}>
      <Suspense fallback={<div aria-busy="true" />}>
        <div className={appStyles.heroSection}>
          <Hero />
        </div>
        <LogoBar />
        <About />
        <Experience />
        <Services />
        <Personas />
        <div className={appStyles.contactSection}>
          <Contact />
        </div>
        <FinalCta />
        <Contacts />
      </Suspense>
    </div>
  );
};

export default MainSpa;
