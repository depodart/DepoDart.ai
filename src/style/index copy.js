// src/style.js

import classNames from 'classnames';

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
        //* Bright green
        green: "#00cea8",
        //* Bright red
        red: "#ff6b6b",
        //* Bright blue
        blue: "#007bff",
        //* Bright yellow
        yellow: "#ffc107",
      },
      common: {
        //* Pure white
        primary: "#FFFFFF",
        //* Very light gray
        secondary: "#F1F1F1", 
        //* Light gray with slight blue tint
        tertiary: "#E5E7EB",
        //* Dark blue-gray
        quaternary: "#1d1836",
    },
    }
  },
  //* Light theme colors
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
        //* Bright green
        green: "#00cea8",
        //* Bright red
        red: "#ff6b6b",
        //* Bright blue
        blue: "#007bff",
        //* Bright yellow
        yellow: "#ffc107",
        //* Bright orange
        orange: "#fd7e14",
      },
      common: {
        //* Pure white
        primary: "#FFFFFF",
        //* Very light gray
        secondary: "#F1F1F1", 
        //* Light gray with slight blue tint
        tertiary: "#E5E7EB",
        //* Dark blue-gray
        quaternary: "#1d1836",
      },
    }
  }
};

export const initialTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
// * themes.dark 
? themes.dark 
: themes.light;
// * themes.light
// ? themes.light
// : themes.dark;


/* --------------------------------------------------------------------------
   Colors
-------------------------------------------------------------------------- */
export const colors = {
  // Light mode background colors
  lightBg: {
    primary: "#FFFFFF",     // Pure white
    secondary: "#F1F1F1",   // Very light gray
    tertiary: "#E5E7EB",    // Light gray with slight blue tint
  },

  // Dark mode background colors  
  darkBg: {
    primary: "#050816",     // Very dark blue/black
    secondary: "#1d1836",   // Dark blue-gray
    tertiary: "#232631",    // Dark gray-blue
  },

  // Text colors
  text: {
    light: {
      primary: "#1d1836",   // Dark blue-gray
      secondary: "#374151", // Medium gray
      tertiary: "#4B5563",  // Gray
      quaternary: "#dfd9ff" // Light purple/lavender
    },
    dark: {
      primary: "#FFFFFF",   // Pure white
      secondary: "#F1F1F1", // Very light gray
      tertiary: "#dfd9ff"   // Light purple/lavender
    }
  },

  // Accent colors
  accent: {
    indigo: {
      light: "#6366F1",     // Bright indigo
      medium: "#4F46E5",    // Deep indigo  
      dark: "#4338CA"       // Darker indigo
    },
    purple: "#915EFF",      // Bright purple
    pink: "#EC4899",        // Bright pink
    lavender: "#A855F7",    // Bright purple/lavender
    green: "#00cea8",       // Bright green
    red: "#ff6b6b",         // Bright red
    blue: "#007bff",        // Bright blue
    yellow: "#ffc107",      // Bright yellow
    orange: "#fd7e14"       // Bright orange
  }
};

/* --------------------------------------------------------------------------
   App Styles
-------------------------------------------------------------------------- */
export const appStyles = {
  container: classNames(
    'relative',
    'z-0',
    `bg-white dark:bg-[${colors.darkBg.primary}]`
  ),
  heroSection: classNames(
    'bg-hero-pattern',
    'bg-cover',
    'bg-no-repeat',
    'bg-center'
  ),
  contactSection: classNames(
    'relative',
    'z-0'
  )
};

/* --------------------------------------------------------------------------
   Loader Styles
-------------------------------------------------------------------------- */
export const loaderContainerStyle = {
  display: classNames('flex'),
  justifyContent: classNames('center'),
  alignItems: classNames('center'),
  flexDirection: classNames('column'),
};

export const loaderProgressTextStyle = {
  className: classNames(
    'text-sm',
    `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`,
    'font-extrabold',
    'mt-10'
  )
};

/* --------------------------------------------------------------------------
   Navbar Styles
-------------------------------------------------------------------------- */
export const navbarStyles = {
  nav: classNames(
    'w-full',
    'flex',
    'items-center',
    'py-5',
    'fixed',
    'top-0',
    'z-20',
    // Background gradient: light uses white; dark uses the dark primary color.
    `bg-gradient-to-b from-white via-white dark:from-[${colors.darkBg.primary}] dark:via-[${colors.darkBg.primary}] to-transparent`,
    'backdrop-blur-md'
  ),
  container: classNames(
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'max-w-7xl',
    'mx-auto'
  ),
  logo: classNames(
    'flex',
    'items-center',
    'gap-2'
  ),
  logoText: classNames(
    'text-[20px]',
    'font-bold',
    'cursor-pointer',
    'flex',
    `text-[${colors.text.light.primary}] dark:text-white`
  ),
  desktopNav: classNames(
    'list-none',
    'hidden',
    'sm:flex',
    'flex-row',
    'gap-6'
  ),
  mobileNav: classNames(
    'list-none',
    'flex',
    'flex-col',
    'gap-6'
  ),
  navLink: classNames(
    'text-[18px]',
    'font-medium',
    'cursor-pointer'
  ),
  activeLink: classNames(
    `text-[${colors.text.light.primary}] dark:text-white`
  ),
  inactiveDesktopLink: classNames(
    `text-[${colors.text.light.tertiary}] dark:text-[${colors.text.dark.tertiary}]`
  ),
  inactiveMobileLink: classNames(
    `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`
  ),
  mobileMenuContainer: classNames(
    'sm:hidden',
    'flex',
    'flex-1',
    'justify-end',
    'items-center'
  ),
  menuIcon: classNames(
    'w-[28px]',
    'h-[28px]',
    'object-contain',
    'cursor-pointer'
  ),
  mobileMenuDropdown: classNames(
    'p-6',
    'black-gradient', // custom class (if needed)
    'absolute',
    'top-20',
    'right-0',
    'mx-4',
    'my-2',
    'min-w-[140px]',
    'z-10',
    'rounded-xl',
    // For accent.primary: light uses one color, dark uses another.
    `bg-[${colors.accent.indigo.light}] dark:bg-[${colors.accent.purple}]`
  )
};

/* --------------------------------------------------------------------------
   About Styles
-------------------------------------------------------------------------- */
export const aboutStyles = {
  serviceCard: classNames(
    'xs:w-[250px]',
    'w-full'
  ),
  serviceCardInner: classNames(
    'w-full',
    'p-[1px]',
    'rounded-[20px]',
    'shadow-card',
    'relative',
    'overflow-hidden'
  ),
  serviceCardInnerColors: {
    start: classNames(`text-[${colors.accent.green}]`),
    middle: classNames(`text-[${colors.accent.blue}]`),
    end: classNames(`text-[${colors.accent.red}]`)
  },
  serviceCardContent: classNames(
    // background.tertiary: light vs. dark
    `bg-[${colors.lightBg.tertiary}] dark:bg-[${colors.darkBg.tertiary}]`,
    'rounded-[20px]',
    'py-5',
    'px-8',
    'h-[280px]',
    'flex',
    'justify-evenly',
    'items-center',
    'flex-col'
  ),
  icon: {
    base: classNames(
      'w-10',
      'h-10',
      'transition-all',
      'duration-300'
    ),
    // On hover, light uses one accent and dark another.
    hovered: classNames(`text-[${colors.accent.purple}] dark:text-[${colors.accent.indigo.light}]`),
    default: classNames(`text-[${colors.accent.indigo.light}] dark:text-[${colors.accent.indigo.dark}]`)
  },
  title: {
    base: classNames(
      'text-[18px]',
      'font-bold',
      'text-center',
      'transition-all',
      'duration-300'
    ),
    hovered: classNames(
      'transform',
      'scale-110',
      'tracking-wider',
      `text-[${colors.accent.purple}] dark:text-[${colors.accent.indigo.light}]`
    ),
    default: classNames(`text-[${colors.text.light.primary}] dark:text-white`)
  },
  description: {
    base: classNames(
      'mt-2',
      'text-[14px]',
      'text-center',
      'transition-all',
      'duration-300',
      'leading-[1.6]'
    ),
    hovered: classNames(
      'transform',
      '-translate-y-1',
      'leading-relaxed',
      `text-[${colors.accent.indigo.light}] dark:text-[${colors.accent.indigo.dark}]`
    ),
    default: classNames(`text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`)
  },
  overview: classNames(
    'mt-4',
    'text-[17px]',
    'max-w-3xl',
    'leading-[30px]',
    `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`
  ),
  servicesContainer: classNames(
    'mt-20',
    'flex',
    'flex-wrap',
    'gap-10'
  )
};

/* --------------------------------------------------------------------------
   Hero Styles
-------------------------------------------------------------------------- */
export const heroStyles = {
  section: classNames(
    'relative',
    'w-full',
    'h-screen',
    'mx-auto'
  ),
  contentWrapper: classNames(
    'relative',
    'z-10'
  ),
  mainContainer: classNames(
    'absolute',
    'inset-0',
    'top-[120px]',
    'max-w-7xl',
    'mx-auto',
    'flex',
    'flex-row',
    'items-start',
    'gap-5'
  ),
  leftDecoration: {
    container: classNames(
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'mt-5'
    ),
    circle: classNames(
      'w-5',
      'h-5',
      'rounded-full',
      // Uses accent.primary: light vs. dark
      `bg-[${colors.accent.purple}] dark:bg-[${colors.accent.indigo.light}]`
    ),
    line: classNames(
      'w-1',
      'sm:h-80',
      'h-40',
      'bg-secondary-dark'
    )
  },
  textContent: {
    brandHighlight: classNames(`text-[${colors.accent.purple}] dark:text-[${colors.accent.indigo.light}]`),
    subtextContainer: classNames(
      'mt-2',
      'text-white'
    )
  },
  scrollIndicator: {
    container: classNames(
      'absolute',
      'xs:bottom-10',
      'bottom-32',
      'w-full',
      'flex',
      'justify-center',
      'items-center'
    ),
    button: classNames(
      'w-[35px]',
      'h-[64px]',
      'rounded-3xl',
      'border-4',
      `border-[${colors.text.light.secondary}] dark:border-[${colors.text.dark.secondary}]`,
      'flex',
      'justify-center',
      'items-start',
      'p-2'
    ),
    dot: classNames(
      'w-3',
      'h-3',
      'rounded-full',
      'bg-white',
      'mb-1'
    )
  },
  heroHeadText: classNames(
    `text-[${colors.text.light.primary}] dark:text-white`
  )
};

/* --------------------------------------------------------------------------
   Experience Styles
-------------------------------------------------------------------------- */
export const experienceStyles = {
  timelineElementContent: {
    background: classNames(`bg-[${colors.lightBg.secondary}] dark:bg-[${colors.darkBg.secondary}]`),
    color: classNames(`text-[${colors.text.light.primary}] dark:text-white`)
  },
  // For the arrow you may need to use inline styles or a custom utility;
  // here we just note the intended colors.
  timelineElementArrow: {
    borderRight: `7px solid ${colors.lightBg.tertiary}` // adjust as needed in your CSS
  },
  iconContainer: classNames(
    'flex',
    'justify-center',
    'items-center',
    'w-full',
    'h-full'
  ),
  iconImage: classNames(
    'w-[60%]',
    'h-[60%]',
    'object-contain'
  ),
  cardTitle: classNames(
    'text-[24px]',
    'font-bold',
    `text-[${colors.text.light.primary}] dark:text-white`
  ),
  cardSubtitle: {
    margin: '0',
    className: classNames(
      'text-[16px]',
      'font-semibold',
      `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`
    )
  },
  pointsList: classNames(
    'mt-5',
    'list-disc',
    'ml-5',
    'space-y-2'
  ),
  pointItem: classNames(
    'text-[14px]',
    'pl-1',
    'tracking-wider',
    `text-[${colors.text.light.tertiary}] dark:text-[${colors.text.dark.tertiary}]`
  ),
  timelineContainer: classNames(
    'mt-20',
    'flex',
    'flex-col'
  )
};

/* --------------------------------------------------------------------------
   Works Styles
-------------------------------------------------------------------------- */
export const worksStyles = {
  projectCard: {
    wrapper: classNames(
      'p-5',
      'rounded-2xl',
      'sm:w-[360px]',
      'w-full',
      // background.secondary: light vs. dark
      `bg-[${colors.lightBg.secondary}] dark:bg-[${colors.darkBg.secondary}]`
    ),
    imageContainer: classNames(
      'relative',
      'w-full',
      'h-[230px]'
    ),
    image: classNames(
      'w-full',
      'h-full',
      'object-cover',
      'rounded-2xl'
    ),
    githubButton: classNames(
      'black-gradient',
      'w-10',
      'h-10',
      'rounded-full',
      'flex',
      'justify-center',
      'items-center',
      'cursor-pointer'
    ),
    githubIcon: classNames(
      'w-1/2',
      'h-1/2',
      'object-contain'
    ),
    title: classNames(
      'font-bold',
      'text-[24px]',
      `text-[${colors.text.light.primary}] dark:text-white`
    ),
    description: classNames(
      'mt-2',
      'text-[14px]',
      `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`
    ),
    tagsContainer: classNames(
      'mt-4',
      'flex',
      'flex-wrap',
      'gap-2'
    ),
    tag: classNames('text-[14px]')
  },
  mainContent: {
    description: classNames(
      'mt-3',
      'text-[17px]',
      'max-w-3xl',
      'leading-[30px]',
      `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`
    ),
    projectsGrid: classNames(
      'mt-20',
      'flex',
      'flex-wrap',
      'gap-7'
    )
  }
};

/* --------------------------------------------------------------------------
   Contact Styles
-------------------------------------------------------------------------- */
export const contactStyles = {
  formInput: classNames(
    'block',
    'w-full',
    'rounded-md',
    // `bg-white dark:bg-[${colors.darkBg.primary}]`,
    `bg-white dark:bg-[transparent]`,
    'border',
    'border-white',
    'px-3.5',
    'py-2',
    'text-base',
    `text-[${colors.text.light.primary}] dark:text-white`,
    `placeholder:text-[${colors.text.light.secondary}] dark:placeholder:text-[${colors.text.dark.secondary}]`
  ),
  formLabel: classNames(
    'block',
    'text-sm',
    'font-semibold',
    `text-[${colors.text.light.primary}] dark:text-white`
  ),
  contactContainer: classNames(
    'relative',
    'xl:mt-12',
    'flex',
    'flex-col-reverse',
    'md:flex-row',
    'gap-10',
    'overflow-hidden'
  ),
  backgroundGradientContainer: classNames(
    'absolute',
    'inset-x-0',
    'top-[-10rem]',
    '-z-10',
    'transform-gpu',
    'overflow-hidden',
    'blur-3xl',
    'sm:top-[-20rem]'
  ),
  backgroundGradientElement: classNames(
    'relative',
    'left-1/2',
    'aspect-[1155/678]',
    'w-[36.125rem]',
    '-translate-x-1/2',
    'rotate-[30deg]',
    'bg-gradient-to-tr',
    `from-[${colors.accent.pink}]`,
    `to-[${colors.accent.lavender}]`,
    'opacity-30',
    'sm:w-[72.1875rem]'
  ),
  contactFormContainer: classNames(
    'flex-1',
    'p-8',
    'rounded-2xl',
    'relative',
    'z-10',
    `bg-[${colors.lightBg.secondary}] dark:bg-[${colors.darkBg.secondary}]`
  ),
  contactForm: classNames(
    'mx-auto',
    'mt-12',
    'max-w-4xl'
  ),
  formFieldsGrid: classNames(
    'grid',
    'grid-cols-1',
    'gap-x-8',
    'gap-y-6',
    'sm:grid-cols-2'
  ),
  submitButtonWrapper: classNames('mt-10'),
  submitButton: classNames(
    'block',
    'w-full',
    'rounded-md',
    `bg-[${colors.accent.indigo.medium}] dark:bg-[${colors.accent.indigo.medium}]`,
    'px-3.5',
    'py-2.5',
    'text-center',
    'text-sm',
    'font-semibold',
    `text-[${colors.text.light.primary}] dark:text-white`,
    'shadow-sm',
    `hover:bg-[${colors.accent.indigo.light}] dark:hover:bg-[${colors.accent.indigo.dark}]`,
    'disabled:opacity-50'
  ),
  successMessage: classNames(
    'mt-4',
    'text-center',
    'text-green-500'
  ),
  errorMessage: classNames(
    'mt-4',
    'text-center',
    'text-red-500'
  ),
  globeVisualizationContainer: classNames(
    'absolute',
    'top-0',
    'right-[-7rem]',
    '-translate-y-1/2',
    'z-0'
  ),
  validationError: classNames(
    'text-red-500',
    'text-sm'
  )
};

/* --------------------------------------------------------------------------
   Footer Styles
-------------------------------------------------------------------------- */
export const footerStyles = {
  container: classNames(
    'w-full',
    `bg-white dark:bg-[${colors.darkBg.primary}]`
  ),
  topSection: classNames(
    'py-8',
    'sm:py-16',
    `bg-white dark:bg-[${colors.darkBg.primary}]`
  ),
  innerWrapper: classNames(
    'mx-auto',
    'max-w-7xl',
    'px-6',
    'lg:px-8'
  ),
  contentContainer: classNames(
    'mx-auto',
    'max-w-2xl',
    'divide-y',
    'lg:mx-0',
    'lg:max-w-none',
    `divide-[${colors.text.light.tertiary}] dark:divide-[${colors.text.dark.tertiary}]`
  ),
  gridLayout: classNames(
    'grid',
    'grid-cols-1',
    'gap-10',
    'py-16',
    'lg:grid-cols-3'
  ),
  description: classNames(
    'mt-4',
    'text-base',
    `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`
  ),
  cardsGrid: classNames(
    'grid',
    'grid-cols-1',
    'gap-6',
    'sm:grid-cols-2',
    'lg:col-span-2',
    'lg:gap-8'
  ),
  bottomSection: classNames(
    'py-8',
    `bg-white dark:bg-[${colors.darkBg.primary}]`,
    `text-[${colors.text.light.primary}] dark:text-white`
  ),
  copyrightWrapper: classNames(
    'mt-4',
    'text-center'
  ),
  copyrightText: classNames(
    'text-sm',
    `text-[${colors.text.light.tertiary}] dark:text-[${colors.text.dark.tertiary}]`
  ),
  contactCard: {
    container: classNames(
      'rounded-2xl',
      'p-10',
      'transition-all',
      'duration-300',
      `bg-white dark:bg-[${colors.darkBg.primary}]`,
      `text-[${colors.text.light.primary}] dark:text-white`
    ),
    hovered: classNames(
      'transition-all',
      'duration-300',
      `bg-[${colors.lightBg.secondary}] dark:bg-[${colors.darkBg.secondary}]`,
      `text-[${colors.text.light.primary}] dark:text-white`
    ),
    default: classNames(
      `bg-[${colors.lightBg.tertiary}] dark:bg-[${colors.darkBg.tertiary}]`
    ),
    header: classNames(
      'flex',
      'items-center',
      'gap-3'
    ),
    icon: classNames(
      'transition-all',
      'duration-300',
      `text-[${colors.accent.indigo.light}] dark:text-[${colors.accent.indigo.dark}]`
    ),
    title: classNames(
      'text-base',
      'font-semibold',
      'transition-all',
      'duration-300',
      `text-[${colors.accent.indigo.light}] dark:text-[${colors.accent.indigo.dark}]`
    ),
    contentList: classNames(
      'mt-3',
      'space-y-1',
      'text-sm'
    ),
    content: classNames(
      'font-semibold',
      'transition-all',
      'duration-300'
    ),
    contentHovered: classNames(`text-[${colors.accent.indigo.medium}] dark:text-[${colors.accent.purple}]`),
    contentDefault: classNames(`text-[${colors.text.light.primary}] dark:text-white`)
  }
};

/* --------------------------------------------------------------------------
   Section & Default Section Styles
-------------------------------------------------------------------------- */
export const sectionStyles = {
  section: classNames(
    'max-w-7xl',
    'mx-auto',
    'relative',
    'z-0'
  ),
  hashSpan: classNames('hash-span')
};

export const defaultSectionStyles = {
  paddingX: classNames(
    'sm:px-16',
    'px-6'
  ),
  paddingY: classNames(
    'sm:py-16',
    'py-6'
  ),
  padding: classNames(
    'sm:px-16',
    'px-6',
    'sm:py-16',
    'py-10'
  ),
  heroHeadText: classNames(
    'font-black',
    `text-[${colors.text.light.primary}] dark:text-white`,
    'lg:text-[80px]',
    'sm:text-[60px]',
    'xs:text-[50px]',
    'text-[40px]',
    'lg:leading-[98px]',
    'mt-2'
  ),
  heroSubText: classNames(
    `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`,
    'font-medium',
    'lg:text-[30px]',
    'sm:text-[26px]',
    'xs:text-[20px]',
    'text-[16px]',
    'lg:leading-[40px]'
  ),
  sectionHeadText: classNames(
    `text-[${colors.text.light.primary}] dark:text-white`,
    'font-black',
    'md:text-[60px]',
    'sm:text-[50px]',
    'xs:text-[40px]',
    'text-[30px]'
  ),
  sectionSubText: classNames(
    'sm:text-[18px]',
    'text-[14px]',
    `text-[${colors.text.light.secondary}] dark:text-[${colors.text.dark.secondary}]`,
    'uppercase',
    'tracking-wider'
  )
};
