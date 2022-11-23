module.exports = {
  mode: 'jit',
  content: [
    // remove unused styles in production
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
