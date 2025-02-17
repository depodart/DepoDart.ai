module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  safelist: [
    {
      // This pattern matches any bg, text, or border class with one of the hex codes;
      // the "dark" variant is also generated.
      pattern: /^(bg|text|border)-\[\#(?:FFFFFF|F1F1F1|050816|1d1836|232631|E5E7EB|374151|4B5563|dfd9ff|6366F1|4F46E5|4338CA|915EFF|EC4899|A855F7|00cea8|ff6b6b|007bff|ffc107|fd7e14)\]$/,
      variants: ['dark'],
    },
    {
      pattern: /^(bg|text|border)-\[\#(?:FFFFFF|F1F1F1|050816|1d1836|232631|E5E7EB|374151|4B5563|dfd9ff|6366F1|4F46E5|4338CA|915EFF|EC4899|A855F7|00cea8|ff6b6b|007bff|ffc107|fd7e14)\]$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'new-background-primary-dark': '#4c2b1c',
        'new-background-secondary-dark': '#cb540b',
        'new-background-tertiary-dark': '#ffc409',
        'new-background-primary-light': '#FFFFFF',
        
        // Background colors
        // 'background-primary-dark': '#4c2b1c',
        // 'background-secondary-dark': '#cb540b',
        // 'background-tertiary-dark': '#ffc409',
        // 'background-primary-light': '#FFFFFF',

        'background-primary-dark': '#050816',
        'background-secondary-dark': '#1d1836',
        'background-tertiary-dark': '#232631',
        'background-primary-light': '#FFFFFF',
        'background-secondary-light': '#F1F1F1',
        'background-tertiary-light': '#E5E7EB',
        // Text colors (for light and dark modes; note that the dark "primary" is white)
        'primary-dark': '#FFFFFF',
        'secondary-dark': '#F1F1F1',
        'tertiary-dark': '#dfd9ff',
        'primary-light': '#1d1836',
        'secondary-light': '#374151',
        'tertiary-light': '#4B5563',
        // Accent colors
        'indigo-light': '#6366F1',
        'indigo-medium': '#4F46E5',
        'indigo-dark': '#4338CA',
        'purple': '#915EFF',
        // Special & additional accent colors
        'hotPink': '#EC4899',
        'lavender': '#A855F7',
        'green': '#00cea8',
        'blue': '#007bff',
        'red': '#ff6b6b',
        'yellow': '#ffc107',
        'orange': '#fd7e14',
        // Common colors
        'common-primary': '#FFFFFF',
        'common-secondary': '#F1F1F1',
        'common-tertiary': '#E5E7EB',
        'common-quaternary': '#1d1836',
        // Other defaults
        'primary': '#050816',
        'secondary': '#aaa6c3',
        'tertiary': '#151030',
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
