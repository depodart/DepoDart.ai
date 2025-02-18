// src/style.js

import classNames from 'classnames';
import { NearestMipMapNearestFilter } from 'three';

//! Theme Configuration
export const themes = {
  colors: {
    dark: {
        background: {
        //* Very dark brown/black
        primary: "#110A07",
        //* Burnt orange
        secondary: "#D23B0C", 
        //* Dark brown
        tertiary: "#200D02",
      },
      text: {
        //* White
        primary: "#FFFFFF",
        //* White 
        secondary: "#FFFFFF",
        //* Bright yellow/gold
        tertiary: "#FFC409",
      },
      emphasis: {
        //* Very dark brown/black
        primary: "#110A07",
        //* Burnt orange
        secondary: "#D23B0C",
        //* Dark brown
        tertiary: "#200D02", 
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
      }
  },
  //* Light theme colors
  light: {
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
      emphasis: {
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
      purple: "#915EFF",      // Bright purple
      pink: "#EC4899",        // Bright pink
      lavender: "#A855F7",    // Bright purple/lavender
      green: "#00cea8",       // Bright green
      red: "#ff6b6b",         // Bright red
      blue: "#007bff",        // Bright blue
      yellow: "#ffc107",      // Bright yellow
      orange: "#fd7e14"       // Bright orange
    },
  }
};
/* --------------------------------------------------------------------------
   App Styles
-------------------------------------------------------------------------- */
export const appStyles = {
  container: classNames(
    'relative',
    'z-0',
    'bg-background-primary-light',
    'dark:bg-background-primary-dark'
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
    'text-secondary-light',
    'dark:text-secondary-dark',
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
    'bg-gradient-to-b',
    'from-background-primary-light',
    'via-background-primary-light', 
    'dark:from-background-primary-dark',
    'dark:via-background-primary-dark',
    'to-transparent',
    'backdrop-blur-md',
    'text-primary-dark',
    'dark:text-primary-light',
    'transition-colors', // Add transition for smooth color changes
    'duration-300' // Duration of transition
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
    'text-primary-dark',
    'dark:text-primary-light',
    'transition-colors', // Add transition
    'duration-300'
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
    'cursor-pointer',
    'text-primary-dark',
    'dark:text-primary-light',
    'transition-colors', // Add transition
    'duration-300'
  ),
  activeLink: classNames(
    'text-secondary-dark', // Changed from indigo-medium
    'dark:text-secondary-light', // Changed from indigo-light
    'transition-colors',
    'duration-300'
  ),
  inactiveDesktopLink: classNames(
    'text-primary-dark',
    'dark:text-primary-light',
    'transition-colors',
    'duration-300'
  ),
  inactiveMobileLink: classNames(
    'text-primary-dark',
    'dark:text-primary-light',
    'transition-colors',
    'duration-300'
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
    'black-gradient',
    'absolute',
    'top-20',
    'right-0',
    'mx-4',
    'my-2',
    'min-w-[140px]',
    'z-10',
    'rounded-xl',
    'bg-background-primary-light',
    'dark:bg-background-primary-dark',
    'text-primary-dark',
    'dark:text-primary-light',
    'transition-colors', // Add transition
    'duration-300'
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
    'overflow-hidden',
    'bg-gradient-to-r',
    `from-secondary-dark`,
    'p-[4px]',
    'transition-all',
    'duration-300',
    'hover:bg-gradient-90'
  ),
  serviceCardInnerColors: {
    start: classNames('text-green'),
    middle: classNames('text-blue'),
    end: classNames('text-red')
  },
  serviceCardContent: classNames(
    'bg-background-secondary-light',
    'dark:bg-background-tertiary-dark',
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
      'duration-300',
    ),
    // On hover, light uses one accent and dark another.
    hovered: classNames( 'dark:text-primary-light'),
    default: classNames( 'dark:text-primary-light')
  },
  text: {
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
      'text-purple',
      'dark:text-indigo-light'
    ),
    default: classNames('text-primary-light', 'dark:text-primary-light')
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
      'text-indigo-light',
      'dark:text-indigo-dark'
    ),
    default: classNames('text-primary-light', 'dark:text-primary-dark')
  },
  overview: classNames(
    'mt-4',
    'text-[17px]',
    'max-w-3xl',
    'leading-[30px]',
    'text-primary-dark',
    'dark:text-primary-light'
  ),
},
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
      'bg-purple',
      // 'dark:bg-indigo-light'
      'bg-secondary-dark'
    ),
    line: classNames(
      'w-1',
      'sm:h-80',
      'h-40',
      'bg-secondary-dark'
    )
  },
  textContent: {
    brandHighlight: classNames('dark:text-secondary-dark'),
    subtextContainer: classNames(
      'mt-2',
      'text-primary-dark',
      'dark:text-secondary-dark',
      
      'text-secondary-dark',
      'dark:text-secondary-light',
      'font-medium',
      'lg:text-[30px]',
      'sm:text-[26px]',
      'xs:text-[20px]',
      'text-[16px]',
      'lg:leading-[40px]'
    ),
    heroHeadText: classNames(
      'font-black',
      'text-primary-dark',
      'dark:text-primary-light',
      'lg:text-[80px]',
      'sm:text-[60px]',
      'xs:text-[50px]',
      'text-[40px]',
      'lg:leading-[98px]',
      'mt-2'
    ),
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
      'border-secondary-light',
      'dark:border-secondary-dark',
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

};

/* --------------------------------------------------------------------------
   Experience Styles
-------------------------------------------------------------------------- */
export const experienceStyles = {

  icon:{
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
  },
    text: {
    cardTitle: classNames(
      'text-[24px]',
      'font-bold',
      'text-primary-dark',
      'dark:text-primary-light'
    ),
      cardSubtitle: {
        margin: '0',
        className: classNames(
          'text-[16px]',
          'font-semibold',
          'text-secondary-dark',
          'dark:text-secondary-light'
        )
      },
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
    'text-primary-dark',
    'dark:text-primary-light'
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
      'bg-background-tertiary-light',
      'dark:bg-background-tertiary-dark'
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
      'display-none',
      'w-1/2',
      'h-1/2',
      'object-contain'
    ),
    title: classNames(
      'font-bold',
      'text-[24px]',
      'text-primary-dark',
      'dark:text-primary-light'
    ),
    description: classNames(
      'mt-2',
      'text-[14px]',
      'text-primary-dark',
      'dark:text-primary-light'
    ),
    tagsContainer: classNames(
      'mt-4',
      'flex',
      'flex-wrap',
      'gap-2'
    ),
    tag: classNames(
      'text-[14px]',
      'text-primary-dark',
      'dark:text-primary-light'
    )
  },
  mainContent: {
    description: classNames(
      'mt-3',
      'text-[17px]',
      'max-w-3xl',
      'leading-[30px]',
      'text-primary-dark',
      'dark:text-primary-light'
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
    'bg-background-primary-light',
    'dark:bg-transparent',
    'border',
    'border-white',
    'px-3.5',
    'py-2',
    'text-base',
    'text-primary-dark',
    'dark:text-primary-light',
    'placeholder:text-secondary-dark',
    'dark:placeholder:text-secondary-light'
  ),
  formLabel: classNames(
    'block',
    'text-sm',
    'font-semibold',
    'text-primary-dark',
    'dark:text-primary-light'
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
    'from-hotPink',
    'to-lavender',
    'opacity-30',
    'sm:w-[72.1875rem]'
  ),
  contactFormContainer: classNames(
    'flex-1',
    'p-8',
    'rounded-2xl',
    'relative',
    'z-10',
    // ? background color of the form
    // 'bg-background-tertiary-light',
    // 'dark:bg-background-tertiary-dark'
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
    'bg-indigo-medium',
    'dark:bg-indigo-medium',
    'px-3.5',
    'py-2.5',
    'text-center',
    'text-sm',
    'font-semibold',
    'text-primary-dark',
    'dark:text-primary-light',
    'shadow-sm',
    'hover:bg-indigo-light',
    'dark:hover:bg-indigo-dark',
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
    'bg-background-primary-light',
    'dark:bg-background-primary-dark'
  ),
  topSection: classNames(
    'py-8',
    'sm:py-16',
    'bg-background-primary-light',
    'dark:bg-background-primary-dark'
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
    'divide-tertiary-light',
    'dark:divide-tertiary-dark'
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
    'text-secondary-dark',
    'dark:text-secondary-light'
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
    'bg-background-primary-light',
    'dark:bg-background-primary-dark',
    'text-primary-dark',
    'dark:text-primary-light'
  ),
  copyrightWrapper: classNames(
    'mt-4',
    'text-center'
  ),
  copyrightText: classNames(
    'text-sm',
    'text-primary-dark',
    'dark:text-primary-light'
  ),
  contactCard: {
    container: classNames(
      'rounded-2xl',
      'p-10',
      'transition-all',
      'duration-300',
      
      'bg-background-primary-light',
      'dark:bg-background-primary-dark',

      'text-primary-dark',
      'dark:text-primary-light'
    ),
    hovered: classNames(
      'transition-all',
      'duration-300',
      'bg-background-secondary-light',
      'dark:bg-background-secondary-dark',
      'text-primary-dark',
      'dark:text-primary-light'
    ),
    default: classNames(
      'bg-background-tertiary-light', 
      'dark:bg-background-tertiary-dark'
    ),
    header: classNames(
      'flex', 
      'items-center', 
      'gap-3'
    ),
    icon: classNames(
      'transition-all', 
      'duration-300', 
      'text-primary-dark', 
      'dark:text-primary-light'
    ),
    title: classNames(
      'text-base',
      'font-semibold',
      'transition-all',
      'duration-300',
      'text-primary-dark', 
      'dark:text-primary-light'
    ),
    contentList: classNames('mt-3', 'space-y-1', 'text-sm'),
    content: classNames('font-semibold', 'transition-all', 'duration-300'),
    contentHovered: classNames('text-indigo-medium', 'dark:text-purple'),
    contentDefault: classNames('text-primary-dark', 'dark:text-primary-light')
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
  sectionHeadText: classNames(
    'text-primary-dark',
    'dark:text-primary-light',
    'font-black',
    'md:text-[60px]',
    'sm:text-[50px]',
    'xs:text-[40px]',
    'text-[30px]'
  ),
  sectionSubText: classNames(
    'sm:text-[18px]',
    'text-[14px]',
    'text-primary-dark',
    'dark:text-primary-light',
    'uppercase',
    'tracking-wider'
  )
};
