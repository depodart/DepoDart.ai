
//! Loader Styles
export const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center", 
  alignItems: "center",
  flexDirection: "column",
};

export const loaderProgressTextStyle = {
  fontSize: 14,
  color: "#F1F1F1",
  fontWeight: 800,
  marginTop: 40,
};

//! Navbar Styles
export const navbarStyles = {
  nav: `w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-[#050816] via-[#050816] to-transparent backdrop-blur-md`,
  container: "w-full flex justify-between items-center max-w-7xl mx-auto",
  logo: "flex items-center gap-2",
  logoText: "text-white text-[20px] font-bold cursor-pointer flex",
  desktopNav: "list-none hidden sm:flex flex-row gap-6",
  mobileNav: "list-none flex flex-col gap-6",
  navLink: "text-[18px] font-medium cursor-pointer",
  activeLink: "text-white",
  inactiveDesktopLink: "text-white",
  inactiveMobileLink: "text-secondary",
  mobileMenuContainer: "sm:hidden flex flex-1 justify-end items-center",
  menuIcon: "w-[28px] h-[28px] object-contain cursor-pointer",
  mobileMenuDropdown: "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#915EFF]"
};

//! Hero Styles
export const heroStyles = {
  section: "relative w-full h-screen mx-auto",
  contentWrapper: "relative z-10",
  mainContainer: "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
  leftDecoration: {
    container: "flex flex-col justify-center items-center mt-5",
    circle: "w-5 h-5 rounded-full bg-[#915EFF]",
    line: "w-1 sm:h-80 h-40 violet-gradient"
  },
  textContent: {
    brandHighlight: "text-[#915EFF]",
    subtextContainer: "mt-2 text-white-100"
  },
  scrollIndicator: {
    container: "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",
    button: "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",
    dot: "w-3 h-3 rounded-full bg-secondary mb-1"
  },
  heroHeadText: "text-white",
};

//! Experience Styles
export const experienceStyles = {
    timelineElementContent: {
      background: "#1d1836",
      color: "#fff"
    },
    timelineElementArrow: {
      borderRight: "7px solid #232631"
    },
    iconContainer: "flex justify-center items-center w-full h-full",
    iconImage: "w-[60%] h-[60%] object-contain",
    cardTitle: "text-white text-[24px] font-bold",
    cardSubtitle: {
      margin: 0,
      className: "text-secondary text-[16px] font-semibold"
    },
    pointsList: "mt-5 list-disc ml-5 space-y-2",
    pointItem: "text-white-100 text-[14px] pl-1 tracking-wider",
    timelineContainer: "mt-20 flex flex-col"
  };

//! Styles for Works component
export const worksStyles = {
  projectCard: {
    wrapper: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",
    imageContainer: "relative w-full h-[230px]",
    image: "w-full h-full object-cover rounded-2xl",
    githubButton: "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",
    githubIcon: "w-1/2 h-1/2 object-contain",
    title: "text-white font-bold text-[24px]",
    description: "mt-2 text-secondary text-[14px]",
    tagsContainer: "mt-4 flex flex-wrap gap-2",
    tag: "text-[14px]"
  },
  mainContent: {
    description: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",
    projectsGrid: "mt-20 flex flex-wrap gap-7"
  }
};

  
//! Contact Styles
export const contactStyles = {
    formInput: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400",
    formLabel: "block text-sm font-semibold text-white",
    contactContainer: "relative xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden",
    backgroundGradientContainer: "absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]",
    backgroundGradientElement: "relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-purple-400 opacity-30 sm:w-[72.1875rem]",
    contactFormContainer: "flex-1 bg-black-100 p-8 rounded-2xl relative z-10",
    contactForm: "mx-auto mt-12 max-w-4xl",
    formFieldsGrid: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2",
    submitButtonWrapper: "mt-10",
    submitButton: "block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50",
    successMessage: "mt-4 text-center text-green-500",
    errorMessage: "mt-4 text-center text-red-500",
    globeVisualizationContainer: "absolute top-0 right-[-7rem] -translate-y-1/2 z-0",
    validationError: "text-red-500 text-sm"
  };

  export const sectionStyles = {
    section: ` max-w-7xl mx-auto relative z-0`,
    hashSpan: "hash-span"
  };
  

  export const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };  