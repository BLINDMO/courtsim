/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#07080d',
        chamber: '#0d0f18',
        panel: '#111520',
        elevated: '#181d2e',
        brass: '#8b6914',
        dim: '#1f2535',
        gold: '#c9a84c',
        'gold-bright': '#e8c96d',
        crimson: '#c0392b',
        'crimson-dim': '#7a1f15',
        teal: '#1abc9c',
        'teal-dim': '#0e6b58',
        parchment: '#f5f0e0',
      },
      fontFamily: {
        display: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'Crimson Text'", 'Georgia', 'serif'],
        record: ["'Courier Prime'", "'Courier New'", 'monospace'],
        ui: ["'Raleway'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
