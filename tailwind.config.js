/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0f',
        'bg-darker': '#050508',
        'surface': '#13131f',
        'surface-light': '#1c1c2a',
        'primary': '#6d28d9',
        'primary-light': '#8b5cf6',
        'accent': '#2563eb',
        'accent-light': '#3b82f6',
        'text': '#f3f4f6',
        'text-muted': '#9ca3af',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Raleway', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
      },
    },
  },
  plugins: [],
};