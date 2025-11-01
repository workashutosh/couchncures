/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mustard': {
          '50': '#FEF9E7',
          '100': '#FEF3C7',
          '200': '#FDE68A',
          '300': '#FCD34D',
          '400': '#FBBF24',
          '500': '#F59E0B',
          '600': '#D97706',
          '700': '#B45309',
          '800': '#92400E',
          '900': '#78350F',
        },
        'mustard-yellow': '#FFA500',
        'mustard-warm': '#FF8C00',
        'mustard-light': '#FFD699',
        'mustard-soft': '#FFB84D',
        // Soft therapy colors - teal/mint green
        'teal': {
          '50': '#F0FDFA',
          '100': '#CCFBF1',
          '200': '#99F6E4',
          '300': '#5EEAD4',
          '400': '#2DD4BF',
          '500': '#14B8A6',
          '600': '#0D9488',
        },
        'mint': '#B2F5EA',
        'soft-teal': '#E6FFFA',
        // Soft pinks
        'soft-pink': '#FDF2F8',
        'pink': '#F9A8D4',
        'pink-light': '#FCE7F3',
        'rose-light': '#FCE7F3',
        // Light greens
        'mint-cream': '#F0FFF4',
        'sage-green': '#E8F5E9',
        // Muted oranges
        'muted-orange': '#FFE5D6',
        'soft-orange': '#FFF4E6',
        // Background colors
        'cream': '#FFFBF5',
        'sage': '#F5F5F0',
        'rose': '#F5E6E8',
        'peach': '#FFE5D9',
        'warm': '#FFF8F0',
        'beige': '#FDF8F3',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['"Inter"', '"Work Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'body': ['"Inter"', '"Work Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        'wide': '0.025em',
        'wider': '0.05em',
      },
    },
  },
  plugins: [],
}

