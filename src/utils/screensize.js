// Screen size breakpoints (matching Tailwind's default breakpoints)
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Check if window is defined (for SSR compatibility)
const isClient = typeof window !== 'undefined';

// Get current screen width
export const getCurrentScreenWidth = () => {
  return isClient ? window.innerWidth : 0;
};

// Check if screen is smaller than a breakpoint
export const isSmallerThan = (breakpoint) => {
  if (!isClient) return false;
  return window.innerWidth < breakpoints[breakpoint];
};

// Check if screen is larger than a breakpoint
export const isLargerThan = (breakpoint) => {
  if (!isClient) return false; 
  return window.innerWidth >= breakpoints[breakpoint];
};

// Check if screen width is between two breakpoints
export const isBetween = (minBreakpoint, maxBreakpoint) => {
  if (!isClient) return false;
  const width = window.innerWidth;
  return width >= breakpoints[minBreakpoint] && width < breakpoints[maxBreakpoint];
};

// Check if device is mobile
export const isMobile = () => {
  return isSmallerThan('md');
};

// Check if device is tablet
export const isTablet = () => {
  return isBetween('md', 'lg');
};

// Check if device is desktop
export const isDesktop = () => {
  return isLargerThan('lg');
};
