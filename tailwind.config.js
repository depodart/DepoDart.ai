module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary surface — deep slate-navy. Communicates trust, depth,
        // and stays out of the way of the 3D moments.
        'primary-dark': '#0E1729',
        'tertiary-dark': '#1A2540',

        // Brand accent — burnt orange. Used SPARINGLY (primary CTAs +
        // single hero accent only). Not the page background anymore.
        'secondary-dark': '#D23B0C',

        // Light tokens — kept for type + gold accents.
        'primary-light': '#FFFFFF',
        'secondary-light': '#FFFFFF',
        'tertiary-light': '#FFC409',

        // Background tokens mirror the primary surface.
        'background-primary-light': '#FFFFFF',
        'background-primary-dark': '#0E1729',
        'background-secondary-dark': '#1A2540',
        'background-tertiary-dark': '#16213A',

        // Slate scale — for borders, dividers, secondary text.
        'slate-soft': '#94A3B8',
        'slate-mid': '#475569',
      },
      boxShadow: {
        // Refined card shadow — subtle, not the brutal solid offset.
        card: '0 20px 40px -20px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 28px 60px -20px rgba(14, 23, 41, 0.8)',
      },
      screens: {
        xs: '450px',
      },
      transitionTimingFunction: {
        'out-spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
