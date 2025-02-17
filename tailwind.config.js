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
        'secondary-dark': '#D23B0C',
        
        'tertiary-dark': '#FFC409',

        'primary-light': '#FFFFFF',
        'secondary-light': '#FFFFFF',
        
        // Background colors
        'background-primary-dark': '#110A07',
        'background-secondary-dark': '#D23B0C',
        'background-tertiary-dark': '#200D02',
        'background-primary-light': '#FFFFFF',
        'indigo-light': '#200D02',
        // 'bg-background-tertiary-light': '#A27B00',
        // 'dark:bg-background-tertiary-dark': '#A27B00',

        // Text colors
        'text-primary-dark': '#FFFFFF',
        'text-secondary-dark': '#FFFFFF',
        'text-tertiary-dark': '#FFFFFF',
        'text-primary-light': '#FFFFFF',

        // Common colors
        'common-primary': '#FFFFFF',
        // 'common-secondary': '#D23B0C',
        'common-secondary': '#D23B0C',
        'common-tertiary': '#FFC409',
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
