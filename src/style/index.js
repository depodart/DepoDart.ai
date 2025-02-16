//! Theme Configuration
export const themes = {
  dark: {
    colors: {
      background: {
        //* Very dark blue-black
        primary: "#050816",
        //* Dark blue-purple
        secondary: "#1d1836",
        //* Dark slate
        tertiary: "#232631",
      },
      text: {
        //* Pure white
        primary: "#FFFFFF", 
        //* Off-white
        secondary: "#F1F1F1",
        //* Pale purple
        tertiary: "#dfd9ff",
      },
      accent: {
        //* Bright purple
        primary: "#915EFF",
        //* Deep indigo
        secondary: "#4F46E5",
        //* Bright indigo
        tertiary: "#6366F1",
      },
      special: {
        //* Hot pink
        hotPink: "#EC4899",
        //* Bright lavender
        lavender: "#A855F7",
      }
    }
  },
  light: {
    colors: {
      background: {
        //* Pure white
        primary: "#FFFFFF",
        //* Very light gray
        secondary: "#F1F1F1", 
        //* Light gray with slight blue tint
        tertiary: "#E5E7EB",
      },
      text: {
        //* Dark blue-gray
        primary: "#1d1836",
        //* Dark gray
        secondary: "#374151",
        //* Medium gray
        tertiary: "#4B5563",
      },
      accent: {
        //* Bright indigo
        primary: "#6366F1",
        //* Deep indigo
        secondary: "#4F46E5", 
        //* Darker indigo
        tertiary: "#4338CA",
      },
      special: {
        //* Bright pink
        hotPink: "#EC4899",
        //* Bright purple
        lavender: "#A855F7",
      }
    }
  }
};

export const initialTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
  ? themes.dark 
  : themes.light;

//! Loader Styles
export const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  flexDirection: "column",
};

export const loaderProgressTextStyle = (theme) => ({
  fontSize: 14,
  color: theme.colors.text.secondary,
  fontWeight: 800,
  marginTop: 40,
});

//! Navbar Styles
export const navbarStyles = (theme) => ({
  nav: `w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-[${theme.colors.background.primary}] via-[${theme.colors.background.primary}] to-transparent backdrop-blur-md`,
  container: "w-full flex justify-between items-center max-w-7xl mx-auto",
  logo: "flex items-center gap-2",
  logoText: `text-[${theme.colors.text.primary}] text-[20px] font-bold cursor-pointer flex`,
  desktopNav: "list-none hidden sm:flex flex-row gap-6",
  mobileNav: "list-none flex flex-col gap-6",
  navLink: "text-[18px] font-medium cursor-pointer",
  activeLink: `text-[${theme.colors.text.primary}]`,
  inactiveDesktopLink: `text-[${theme.colors.text.tertiary}]`,
  inactiveMobileLink: `text-[${theme.colors.text.secondary}]`,
  mobileMenuContainer: "sm:hidden flex flex-1 justify-end items-center",
  menuIcon: "w-[28px] h-[28px] object-contain cursor-pointer",
  mobileMenuDropdown: `p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[${theme.colors.accent.primary}]`
});

//! About Styles
export const aboutStyles = {
  serviceCard: "xs:w-[250px] w-full",
  serviceCardInner: "w-full p-[1px] rounded-[20px] shadow-card relative overflow-hidden",
  serviceCardContent: "bg-tertiary rounded-[20px] py-5 px-8 h-[280px] flex justify-evenly items-center flex-col",
  icon: {
    base: "w-10 h-10 transition-all duration-300",
    hovered: "text-[#915EFF]",
    default: "text-[#00cea8]"
  },
  title: {
    base: "text-[18px] font-bold text-center transition-all duration-300",
    hovered: "text-[#915EFF] transform scale-110 tracking-wider",
    default: "text-[#E0E0E0]"
  },
  description: {
    base: "mt-2 text-[14px] text-center transition-all duration-300 leading-[1.6]",
    hovered: "text-[#00cea8] transform translate-y-[-5px] leading-relaxed",
    default: "text-[#B0B0B0]"
  },
  overview: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",
  servicesContainer: "mt-20 flex flex-wrap gap-10"
};

//! Hero Styles
export const heroStyles = (theme) => ({
  section: "relative w-full h-screen mx-auto",
  contentWrapper: "relative z-10",
  mainContainer: "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
  leftDecoration: {
    container: "flex flex-col justify-center items-center mt-5",
    circle: `w-5 h-5 rounded-full bg-[${theme.colors.accent.primary}]`,
    line: "w-1 sm:h-80 h-40 violet-gradient"
  },
  textContent: {
    brandHighlight: `text-[${theme.colors.accent.primary}]`,
    subtextContainer: "mt-2 text-white-100"
  },
  scrollIndicator: {
    container: "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",
    button: `w-[35px] h-[64px] rounded-3xl border-4 border-[${theme.colors.text.secondary}] flex justify-center items-start p-2`,
    // dot: `w-3 h-3 rounded-full bg-[${theme.colors.text.secondary}] mb-1`
    // dot: `w-3 h-3 rounded-full bg-[${theme.colors.special.lavender}] mb-1`
    dot: `w-3 h-3 rounded-full bg-[white] mb-1`
  },
  heroHeadText: `text-[${theme.colors.text.primary}]`,
});

//! Experience Styles
export const experienceStyles = (theme) => ({
  timelineElementContent: {
    background: theme.colors.background.secondary,
    color: theme.colors.text.primary
  },
  timelineElementArrow: {
    borderRight: `7px solid ${theme.colors.background.tertiary}`
  },
  iconContainer: "flex justify-center items-center w-full h-full",
  iconImage: "w-[60%] h-[60%] object-contain",
  cardTitle: `text-[${theme.colors.text.primary}] text-[24px] font-bold`,
  cardSubtitle: {
    margin: 0,
    className: `text-[${theme.colors.text.secondary}] text-[16px] font-semibold`
  },
  pointsList: "mt-5 list-disc ml-5 space-y-2",
  pointItem: `text-[${theme.colors.text.tertiary}] text-[14px] pl-1 tracking-wider`,
  timelineContainer: "mt-20 flex flex-col"
});

//! Styles for Works component
export const worksStyles = (theme) => ({
  projectCard: {
    wrapper: `bg-[${theme.colors.background.secondary}] p-5 rounded-2xl sm:w-[360px] w-full`,
    imageContainer: "relative w-full h-[230px]",
    image: "w-full h-full object-cover rounded-2xl",
    githubButton: `black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`,
    githubIcon: "w-1/2 h-1/2 object-contain",
    title: `text-[${theme.colors.text.primary}] font-bold text-[24px]`,
    description: `mt-2 text-[${theme.colors.text.secondary}] text-[14px]`,
    tagsContainer: "mt-4 flex flex-wrap gap-2",
    tag: "text-[14px]"
  },
  mainContent: {
    description: `mt-3 text-[${theme.colors.text.secondary}] text-[17px] max-w-3xl leading-[30px]`,
    projectsGrid: "mt-20 flex flex-wrap gap-7"
  }
});

//! Contact Styles
export const contactStyles = (theme) => ({
  formInput: `block w-full rounded-md bg-[${theme.colors.background.primary}] px-3.5 py-2 text-base text-[${theme.colors.text.primary}] placeholder:text-[${theme.colors.text.secondary}]`,
  formLabel: `block text-sm font-semibold text-[${theme.colors.text.primary}]`,
  contactContainer: "relative xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden",
  backgroundGradientContainer: "absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]",
  backgroundGradientElement: `relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[${theme.colors.special.hotPink}] to-[${theme.colors.special.lavender}] opacity-30 sm:w-[72.1875rem]`,
  contactFormContainer: `flex-1 bg-[${theme.colors.background.secondary}] p-8 rounded-2xl relative z-10`,
  contactForm: "mx-auto mt-12 max-w-4xl",
  formFieldsGrid: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2",
  submitButtonWrapper: "mt-10",
  submitButton: `block w-full rounded-md bg-[${theme.colors.accent.secondary}] px-3.5 py-2.5 text-center text-sm font-semibold text-[${theme.colors.text.primary}] shadow-sm hover:bg-[${theme.colors.accent.tertiary}] disabled:opacity-50`,
  successMessage: "mt-4 text-center text-green-500",
  errorMessage: "mt-4 text-center text-red-500",
  globeVisualizationContainer: "absolute top-0 right-[-7rem] -translate-y-1/2 z-0",
  validationError: "text-red-500 text-sm"
});

export const sectionStyles = {
  section: `max-w-7xl mx-auto relative z-0`,
  hashSpan: "hash-span"
};

export const styles = (theme) => ({
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText: `font-black text-[${theme.colors.text.primary}] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`,
  heroSubText: `text-[${theme.colors.text.tertiary}] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]`,

  sectionHeadText: `text-[${theme.colors.text.primary}] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`,
  sectionSubText: `sm:text-[18px] text-[14px] text-[${theme.colors.text.secondary}] uppercase tracking-wider`,
});
