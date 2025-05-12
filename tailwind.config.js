/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        // Light Mode Colors
        'professional-blue': '#2A72C2',
        'warm-sand': '#D8A373',
        'light-canvas': '#F8F9FA',
        'deep-charcoal': '#343A40',
        'medium-grey': '#6C757D',
        
        // Dark Mode Colors
        'deep-ocean-blue': '#1A3A6D',
        'muted-gold': '#B08D57',
        'night-sky': '#212529',
        'soft-ivory': '#E9ECEF',
        'cool-grey': '#ADB5BD',
      },
    },
  },
  plugins: [],
};