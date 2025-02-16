module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  // The safelist ensures that Tailwind generates these classes even though they’re dynamically constructed in your code.
  safelist: [
    // Dark theme dynamic classes
    'bg-[#050816]', // theme.colors.background.primary (dark)
    'bg-[#1d1836]', // theme.colors.background.secondary (dark)
    'bg-[#232631]', // theme.colors.background.tertiary (dark)
    'text-[#FFFFFF]', // theme.colors.text.primary (dark)
    'text-[#F1F1F1]', // theme.colors.text.secondary (dark)
    'text-[#dfd9ff]', // theme.colors.text.tertiary (dark)
    'bg-[#915EFF]', // theme.colors.accent.primary (dark)
    'bg-[#4F46E5]', // theme.colors.accent.secondary (dark)
    'bg-[#6366F1]', // theme.colors.accent.tertiary (dark)
    'bg-[#EC4899]', // theme.colors.special.hotPink
    'bg-[#A855F7]', // theme.colors.special.lavender
    'bg-[#00cea8]', // theme.colors.special.green
    'bg-[#ff6b6b]', // theme.colors.special.red
    'bg-[#007bff]', // theme.colors.special.blue
    'bg-[#ffc107]', // theme.colors.special.yellow

    // Light theme dynamic classes
    'bg-[#FFFFFF]', // theme.colors.background.primary (light)
    'bg-[#F1F1F1]', // theme.colors.background.secondary (light)
    'bg-[#E5E7EB]', // theme.colors.background.tertiary (light)
    'text-[#1d1836]', // theme.colors.text.primary (light)
    'text-[#374151]', // theme.colors.text.secondary (light)
    'text-[#4B5563]', // theme.colors.text.tertiary (light)
    'bg-[#6366F1]', // theme.colors.accent.primary (light)
    'bg-[#4F46E5]', // theme.colors.accent.secondary (light)
    'bg-[#4338CA]', // theme.colors.accent.tertiary (light)
    'bg-[#fd7e14]', // theme.colors.special.orange (light)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        // Dark theme colors
        'background-primary-dark': '#050816',
        'background-secondary-dark': '#1d1836',
        'background-tertiary-dark': '#232631',
        'text-primary-dark': '#FFFFFF',
        'text-secondary-dark': '#F1F1F1',
        'text-tertiary-dark': '#dfd9ff',
        'accent-primary-dark': '#915EFF',
        'accent-secondary-dark': '#4F46E5',
        'accent-tertiary-dark': '#6366F1',
        // Light theme colors
        'background-primary-light': '#FFFFFF',
        'background-secondary-light': '#F1F1F1',
        'background-tertiary-light': '#E5E7EB',
        'text-primary-light': '#1d1836',
        'text-secondary-light': '#374151',
        'text-tertiary-light': '#4B5563',
        'accent-primary-light': '#6366F1',
        'accent-secondary-light': '#4F46E5',
        'accent-tertiary-light': '#4338CA',
        // Special & common colors
        'special-hotPink': '#EC4899',
        'special-lavender': '#A855F7',
        'special-green': '#00cea8',
        'special-red': '#ff6b6b',
        'special-blue': '#007bff',
        'special-yellow': '#ffc107',
        'special-orange': '#fd7e14',
        'common-primary': '#FFFFFF',
        'common-secondary': '#F1F1F1',
        'common-tertiary': '#E5E7EB',
        'common-quaternary': '#1d1836',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/herobg.png')",
      },
    },
  },
  plugins: [],
};
