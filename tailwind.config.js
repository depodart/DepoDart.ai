module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'primary-dark': '#110A07',      // Very dark brown/black
        'secondary-dark': '#D23B0C',    // Burnt orange
        'tertiary-dark': '#200D02',     // Dark brown
        
        // Light theme colors
        'primary-light': '#FFFFFF',      // White
        'secondary-light': '#FFFFFF',    // White
        'tertiary-light': '#FFC409',     // Bright yellow/gold
        
        // Background colors
        'background-primary-light': '#FFFFFF',    // White
        'background-primary-dark': '#110A07',    // Very dark brown/black
        'background-secondary-dark': '#D23B0C',   // Burnt orange
        'background-tertiary-dark': '#200D02',    // Dark brown
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
