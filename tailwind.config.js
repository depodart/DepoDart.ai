const colors = require('tailwindcss/colors')

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
        // New brand background colours (using your provided values)
        'new-background-primary-dark': '#4c2b1c',
        'new-background-secondary-dark': '#cb540b',
        'new-background-tertiary-dark': '#ffc409',
        'new-background-primary-light': '#FFFFFF',

        // Map the background colours to your new brand colours
        'background-primary-dark': '#4c2b1c',
        'background-secondary-dark': '#cb540b',
        'background-tertiary-dark': '#ffc409',
        'background-primary-light': '#FFFFFF',
        // For additional light backgrounds, you might use Tailwind’s grey scale:
        'background-secondary-light': colors.gray[100],
        'background-tertiary-light': colors.gray[200],

        // Text colours: Using Tailwind’s palette for a more standard approach
        'primary-dark': colors.white, // For dark mode, primary text is white
        'secondary-dark': colors.gray[300],
        'tertiary-dark': colors.gray[400],
        'primary-light': colors.gray[900], // For light mode, primary text is dark
        'secondary-light': colors.gray[700],
        'tertiary-light': colors.gray[600],

        // Accent colours: Replacing hard-coded hex values with Tailwind colours
        'indigo-light': colors.indigo[300],
        'indigo-medium': colors.indigo[500],
        'indigo-dark': colors.indigo[700],
        'purple': colors.purple[500],
        'hotPink': colors.pink[500],
        'lavender': colors.violet[500],
        'green': colors.green[500],
        'blue': colors.blue[500],
        'red': colors.red[500],
        'yellow': colors.amber[500],
        'orange': colors.orange[500],

        // Common colours – also using Tailwind’s defaults
        'common-primary': colors.white,
        'common-secondary': colors.gray[100],
        'common-tertiary': colors.gray[200],
        'common-quaternary': colors.gray[900],

        // Other default colours: now using Tailwind colours for “primary” tokens
        'primary': colors.gray[900],
        'secondary': colors.gray[500],
        'tertiary': colors.gray[800],
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
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
}
