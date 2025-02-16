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

//! App Styles
export const appStyles= (theme) => ({
  container: classNames(
    'relative',
    'z-0',
    `bg-[${theme.colors.background.primary}]`
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
});

//! Loader Styles
export const loaderContainerStyle = {
  display: classNames("flex"),
  justifyContent: classNames("center"),
  alignItems: classNames("center"),
  flexDirection: classNames("column"),
};

export const loaderProgressTextStyle = (theme) => ({
  fontSize: classNames(14),
  color: classNames(theme.colors.text.secondary),
  fontWeight: classNames(800),
  marginTop: classNames(40),
});

//! Navbar Styles
export const navbarStyles = (theme) => ({
  nav: classNames(
    'w-full',
    'flex',
    'items-center',
    'py-5',
    'fixed',
    'top-0',
    'z-20',
    // 'bg-gradient-to-b',
    `from-[${theme.colors.background.primary}]`,
    `via-[${theme.colors.background.primary}]`,
    'to-transparent',
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
    `text-[${theme.colors.text.primary}]`,
    'text-[20px]',
    'font-bold',
    'cursor-pointer',
    'flex'
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
    `text-[${theme.colors.text.primary}]`
  ),
  inactiveDesktopLink: classNames(
    `text-[${theme.colors.text.tertiary}]`
  ),
  inactiveMobileLink: classNames(
    `text-[${theme.colors.text.secondary}]`
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
    `bg-[${theme.colors.accent.primary}]`
  )
});

//! About Styles
export const aboutStyles = (theme) => ({
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
    start: classNames(`${theme.colors.special.green}`),
    middle: classNames(`${theme.colors.special.blue}`),
    end: classNames(`${theme.colors.special.red}`)
  },
  serviceCardContent: classNames(
    `bg-[${theme.colors.background.tertiary}]`,
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
    hovered: classNames(`text-[${theme.colors.accent.primary}]`),
    default: classNames(`text-[${theme.colors.accent.tertiary}]`)
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
      `text-[${theme.colors.accent.primary}]`,
      'transform',
      'scale-110',
      'tracking-wider'
    ),
    default: classNames(`text-[${theme.colors.text.primary}]`)
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
      `text-[${theme.colors.accent.tertiary}]`,
      'transform',
      'translate-y-[-5px]',
      'leading-relaxed'
    ),
    default: classNames(`text-[${theme.colors.text.secondary}]`)
  },
  overview: classNames(
    'mt-4',
    `text-[${theme.colors.text.secondary}]`,
    'text-[17px]',
    'max-w-3xl',
    'leading-[30px]'
  ),
  servicesContainer: classNames(
    'mt-20',
    'flex',
    'flex-wrap',
    'gap-10'
  )
});

//! Hero Styles
export const heroStyles = (theme) => ({
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
      `bg-[${theme.colors.accent.primary}]`
    ),
    line: classNames(
      'w-1',
      'sm:h-80',
      'h-40',
      'violet-gradient'
    )
  },
  textContent: {
    brandHighlight: classNames(`text-[${theme.colors.accent.primary}]`),
    subtextContainer: classNames(
      'mt-2',
      'text-white-100'
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
      `border-[${theme.colors.text.secondary}]`,
      'flex',
      'justify-center',
      'items-start',
      'p-2'
    ),
    dot: classNames(
      'w-3',
      'h-3',
      'rounded-full',
      'bg-[white]',
      'mb-1'
    )
  },
  heroHeadText: classNames(`text-[${theme.colors.text.primary}]`)
});

//! Experience Styles
export const experienceStyles = (theme) => ({
  timelineElementContent: {
    background: classNames(`${theme.colors.background.secondary}`),
    color: classNames(`${theme.colors.text.primary}`)
  },
  timelineElementArrow: {
    borderRight: classNames(`7px solid ${theme.colors.background.tertiary}`)
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
    `text-[${theme.colors.text.primary}]`,
    'text-[24px]',
    'font-bold'
  ),
  cardSubtitle: {
    margin: classNames('0'),
    className: classNames(
      `text-[${theme.colors.text.secondary}]`,
      'text-[16px]',
      'font-semibold'
    )
  },
  pointsList: classNames(
    'mt-5',
    'list-disc',
    'ml-5',
    'space-y-2'
  ),
  pointItem: classNames(
    `text-[${theme.colors.text.tertiary}]`,
    'text-[14px]',
    'pl-1',
    'tracking-wider'
  ),
  timelineContainer: classNames(
    'mt-20',
    'flex',
    'flex-col'
  )
});

//! Works Styles
export const worksStyles = (theme) => ({
  projectCard: {
    wrapper: classNames(
      `bg-[${theme.colors.background.secondary}]`,
      'p-5',
      'rounded-2xl',
      'sm:w-[360px]',
      'w-full'
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
      `text-[${theme.colors.text.primary}]`,
      'font-bold',
      'text-[24px]'
    ),
    description: classNames(
      'mt-2',
      `text-[${theme.colors.text.secondary}]`,
      'text-[14px]'
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
      `text-[${theme.colors.text.secondary}]`,
      'text-[17px]',
      'max-w-3xl',
      'leading-[30px]'
    ),
    projectsGrid: classNames(
      'mt-20',
      'flex',
      'flex-wrap',
      'gap-7'
    )
  }
});

//! Contact Styles
export const contactStyles = (theme) => ({
  formInput: classNames(
    'block',
    'w-full',
    'rounded-md',
    `bg-[${theme.colors.background.primary}]`,
    // `bg-[${theme.colors.common.primary}]`,
    'px-3.5',
    'py-2',
    'text-base',
    `text-[${theme.colors.text.primary}]`,
    `placeholder:text-[${theme.colors.text.secondary}]`
  ),
  formLabel: classNames(
    'block',
    'text-sm',
    'font-semibold',
    `text-[${theme.colors.text.primary}]`
  ),
  contactContainer: classNames(
    'relative',
    'xl:mt-12',
    'flex',
    'flex-col-reverse',
    'md:flex-row',
    'gap-10',
    'overflow-hidden',
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
    `from-[${theme.colors.special.hotPink}]`,
    `to-[${theme.colors.special.lavender}]`,
    'opacity-30',
    'sm:w-[72.1875rem]'
  ),
  contactFormContainer: classNames(
    'flex-1',
    `bg-[${theme.colors.background.secondary}]`,
    'p-8',
    'rounded-2xl',
    'relative',
    'z-10'
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
    `bg-[${theme.colors.accent.secondary}]`,
    'px-3.5',
    'py-2.5',
    'text-center',
    'text-sm',
    'font-semibold',
    `text-[${theme.colors.text.primary}]`,
    'shadow-sm',
    `hover:bg-[${theme.colors.accent.tertiary}]`,
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
});

//! Footer Styles
export const footerStyles = (theme) => ({
  container: classNames(
    'w-full',
    `bg-[${theme.colors.background.primary}]`
  ),
  topSection: classNames(
    `bg-[${theme.colors.background.primary}]`,
    'py-8',
    'sm:py-16'
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
    `divide-[${theme.colors.text.tertiary}]`,
    'lg:mx-0',
    'lg:max-w-none'
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
    `text-[${theme.colors.text.secondary}]`
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
    `bg-[${theme.colors.background.primary}]`,
    `text-[${theme.colors.text.primary}]`,
    'py-8'
  ),
  copyrightWrapper: classNames(
    'mt-4',
    'text-center'
  ),
  copyrightText: classNames(
    'text-sm',
    `text-[${theme.colors.text.tertiary}]`
  ),
  contactCard: {
    container: classNames(
      `bg-[${theme.colors.background.primary}]`,
      `text-[${theme.colors.text.primary}]`,
      'rounded-2xl',
      'p-10',
      'transition-all',
      'duration-300'
    ),
    hovered: classNames(
      `bg-[${theme.colors.background.secondary}]`,
      `text-[${theme.colors.text.primary}]`
    ),
    default: classNames(`bg-[${theme.colors.background.tertiary}]`),
    header: classNames(
      'flex',
      'items-center',
      'gap-3'
    ),
    icon: classNames(
      'transition-all',
      'duration-300',
      `bg-[${theme.colors.background.secondary}]`,
      `text-[${theme.colors.accent.primary}]`
    ),
    title: classNames(
      'text-base',
      'font-semibold',
      'transition-all',
      'duration-300',
      `bg-[${theme.colors.background.secondary}]`,
      `text-[${theme.colors.accent.primary}]`
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
    contentHovered: classNames(`text-[${theme.colors.accent.secondary}]`),
    contentDefault: classNames(`text-[${theme.colors.text.primary}]`)
  }
});

export const sectionStyles = {
  section: classNames(
    'max-w-7xl',
    'mx-auto',
    'relative',
    'z-0'
  ),
  hashSpan: classNames('hash-span')
};

export const styles = (theme) => ({
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
    // `bg-[${theme.colors.background.secondary}]`,
    `text-[${theme.colors.text.primary}]`,
    'lg:text-[80px]',
    'sm:text-[60px]',
    'xs:text-[50px]',
    'text-[40px]',
    'lg:leading-[98px]',
    'mt-2'
  ),
  heroSubText: classNames(
    // `bg-[${theme.colors.background.secondary}]`,
    `text-[${theme.colors.text.tertiary}]`,
    'font-medium',
    'lg:text-[30px]',
    'sm:text-[26px]',
    'xs:text-[20px]',
    'text-[16px]',
    'lg:leading-[40px]'
  ),
  sectionHeadText: classNames(
    `text-[${theme.colors.text.primary}]`,
    'font-black',
    'md:text-[60px]',
    'sm:text-[50px]',
    'xs:text-[40px]',
    'text-[30px]'
  ),
  sectionSubText: classNames(
    'sm:text-[18px]',
    'text-[14px]',
    // `bg-[${theme.colors.background.secondary}]`,
    `text-[${theme.colors.text.secondary}]`,
    'uppercase',
    'tracking-wider'
  )
});
