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
    'justify-center',
    'py-5', 
    'fixed',
    'top-0',
    'z-20',
    'dark:from-background-primary-dark',
    'dark:via-background-primary-dark',
    'to-transparent',
    'backdrop-blur-md',
    'text-primary-dark', 
    'dark:text-primary-light',
    'transition-colors',
    'duration-300'
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
    'gap-6',
    'items-center',
    'justify-center'
  ),
  mobileNav: classNames(
    'list-none',
    'flex',
    'flex-col',
    'gap-6',
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
export const navbarStylesVertical = {
  floatingNav: classNames(
    'fixed right-0 top-1/2 -translate-y-1/2', // Center vertically on the right
    'w-20 h-auto', // Narrow width for vertical tabs
    'flex flex-col items-center', // Vertical layout
    'py-7',
    'px-7',
    'z-20',
    'bg-transparent',
    'backdrop-blur-md',
    'rounded-l-lg',
    'shadow-[-4px_-4px_4px_0px_rgba(210,59,12,0.6),_-4px_0px_4px_0px_rgba(210,59,12,0.6),_-4px_4px_4px_0px_rgba(210,59,12,0.6)]',
    'shadow-secondary-dark',
    'dark:from-background-primary-dark',
    'dark:via-background-primary-dark',
    'transition-all duration-300'
  ),
  verticalContainer: classNames(
    'flex flex-col items-center gap-8', // Vertical alignment
    'h-full w-full'
  ),

  verticalNav: classNames(
    'list-none',
    'flex flex-col', // Vertical direction
    'gap-6',
    'items-center' // Center items
  ),
  verticalLink: classNames(
    // 'rotate-90', // Rotate links vertically
    'w-28', // Enough width for rotated text
    'text-center',
    'text-[16px] font-medium',
    'cursor-pointer',
    'hover:text-secondary-dark dark:hover:text-secondary-light',
    'transition-colors duration-300'
  ),
  activeVerticalLink: classNames(
    'text-secondary-dark dark:text-secondary-light',
    'border-b-2 border-secondary-dark dark:border-secondary-light'
  ),
  mobileMenuContainer: classNames(
    'sm:hidden',
    'fixed right-4 top-4', // Position mobile menu button
    'z-30'
  ),
  menuIcon: classNames(
    'w-8 h-8',
    'cursor-pointer',
    'hover:scale-110',
    'transition-transform duration-300'
  ),
  mobileMenuDropdown: classNames(
    'fixed right-4 top-16',
    'py-4 px-6',
    'rounded-lg',
    'bg-white/90 dark:bg-gray-800/90',
    'backdrop-blur-sm',
    'shadow-xl',
    'min-w-[160px]',
    'flex flex-col gap-4'
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
    'rounded-3xl',
    'relative',
    'overflow-hidden',
    // Vialusation of border over overwrites the gradient.
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
    'rounded-3xl',
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
    sectionHeadText: {
      title: classNames(
        'uppercase',
        'text-center'
      ),
    subtext: classNames(
      'text-center'
    ),
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
    mainTitle:{
      h2: classNames(
        'uppercase',
        'text-center'
      ),
      p: classNames(
        'text-center'
      )
    },
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
export const servicesStyles = {
  emptyStateContainer: "flex items-center justify-center h-[400px] bg-background-secondary-dark dark:bg-background-tertiary-dark rounded-3xl border-secondary-dark",
  emptyStateText: "text-primary-light",
  
  detailsContainer: "relative rounded-3xl mb-8 bg-background-secondary-dark dark:bg-background-tertiary-dark shadow-secondary-dark border-2 border-secondary-dark p-6",
  imageContainer: "w-full aspect-video rounded-3xl overflow-hidden mb-6",
  image: "w-full h-full object-cover",
  title: "text-2xl font-bold text-secondary-dark dark:text-tertiary-light",
  description: "mt-4 text-primary-dark dark:text-primary-light bg-background-secondary-dark dark:bg-background-tertiary-dark rounded-lg",
  tagsContainer: "flex flex-wrap gap-2 mt-4",
  tag: "px-3 py-1.5 rounded-3xl text-primary-light bg-secondary-dark/80 backdrop-blur-sm",

  serviceCard: {
      container: (isSelected) => `
          flex gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-200 dark:bg-background-tertiary-dark
          ${isSelected ? 
              'dark:bg-background-tertiary-dark shadow-[-2px_-2px_0px_0px_rgba(210,59,12,0.3)] shadow-secondary-dark border border-secondary-dark' : 
              'hover:bg-background-secondary-dark/90 hover:dark:bg-background-tertiary-dark/90'
          }
      `,
      imageWrapper: "w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden",
      image: "w-full h-full object-cover",
      contentWrapper: "flex flex-col justify-center",
      title: "text-sm font-semibold text-secondary-dark dark:text-tertiary-light mb-1",
      description: "text-xs text-primary-dark dark:text-primary-light line-clamp-2 opacity-90"
  },

  pageLayout: {
      container: "flex flex-col md:flex-row gap-8",
      mainContent: "md:w-2/3",
      sidebar: "md:w-1/3 space-y-4"
  }
};


export const worksStyles = {
  text: {
    mainContent: {
      h2: classNames(
        'uppercase',
        'text-center'
    ),
    p: classNames(
        'mt-3',
        'text-primary-dark',
        'dark:text-primary-light'
      )
    },
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
  },
  projectCard: {
    wrapper: classNames(
      'p-5',
      'rounded-3xl',
      'sm:w-[360px]',
      'w-full',
      // background.secondary: light vs. dark
      'bg-background-secondary-dark',
      'dark:bg-background-tertiary-dark',
      'shadow-[-4px_-4px_4px_0px_rgba(210,59,12,0.6),_-4px_0px_4px_0px_rgba(210,59,12,0.6),_-4px_4px_4px_0px_rgba(210,59,12,0.6)]',
      'shadow-secondary-dark'
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
      'rounded-3xl'
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

    'placeholder:text-secondary-light',
    'dark:placeholder:text-secondary-light'
  ),
  formLabel: classNames(
    'block',
    'text-sm',
    'font-semibold',
    'text-primary-dark',
    'dark:text-primary-light',
    'hidden'
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
    'rounded-3xl',
    'relative',
    'z-10',
    'border-2',
    'border-secondary-dark',
    // ? background color of the form
    'bg-background-secondary-dark',
    'dark:bg-background-tertiary-dark',
    'dark:bg-transparent'
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
    //? Button background color
    'bg-secondary-light',
    'dark:bg-secondary-dark',
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
    // 'dark:divide-tertiary-dark'
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
    'text-primary-dark',
    'dark:text-primary-light',
    'bg-background-primary-light',
    'dark:bg-background-primary-dark',
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
      'rounded-3xl',
      'p-10',
      'transition-all',
      'duration-300',
      
      'bg-background-secondary-dark',
      'dark:bg-background-primary-dark',

      'shadow-[-4px_-4px_4px_0px_rgba(210,59,12,0.6),_-4px_0px_4px_0px_rgba(210,59,12,0.6),_-4px_4px_4px_0px_rgba(210,59,12,0.6)]',
      'shadow-secondary-dark',  

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
