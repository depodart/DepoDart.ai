module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  safelist: [
    {
      pattern: /^(bg|text|border)-\[\#(?:4C2B1C|CB540B|FFC409|FFFFFF)\]$/,
      variants: ['dark'],
    },
    {
      pattern: /^(bg|text|border)-\[\#(?:4C2B1C|CB540B|FFC409|FFFFFF)\]$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#110A07',
        'secondary-dark': '#CB540B',
        'tertiary-dark': '#FFC409',
        'primary-light': '#FFFFFF',
        
        // Background colors
        'background-primary-dark': '#110A07',
        'background-secondary-dark': '#CB540B',
        'background-tertiary-dark': '#FFC409',
        'background-primary-light': '#FFFFFF',

        // Text colors
        'text-primary-dark': '#FFFFFF',
        'text-secondary-dark': '#FFFFFF',
        'text-tertiary-dark': '#FFFFFF',
        'text-primary-light': '#FFFFFF',

        // Common colors
        'common-primary': '#FFFFFF',
        // 'common-secondary': '#CB540B',
        'common-secondary': '#FFFFFF',
        // 'common-tertiary': '#FFC409',
        'common-tertiary': '#FFFFFF',
      },
      boxShadow: {
        card: '0 35px 120px -15px #110A07',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/herobg.png')",
      },
    },
  },
  plugins: [],
};
