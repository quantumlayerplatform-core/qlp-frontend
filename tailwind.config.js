/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Dark Foundation
        'dark-space': '#0a0a0f',
        'dark-void': '#0f0f1a',
        'dark-matter': '#1a1a2e',
        'dark-surface': '#252545',
        'dark-elevated': '#2d2d55',
        
        // Electric Accent System
        'electric-blue': '#0066ff',
        'electric-blue-bright': '#3385ff',
        'electric-blue-glow': 'rgba(0, 102, 255, 0.4)',
        
        // Glass Tinting
        'glass-blue': 'rgba(59, 130, 246, 0.1)',
        'glass-purple': 'rgba(139, 92, 246, 0.08)',
        'glass-teal': 'rgba(20, 184, 166, 0.06)',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-accent': 'rgba(0, 102, 255, 0.12)',
        
        // High Contrast Text
        'text-pure-white': '#ffffff',
        'text-glass-white': 'rgba(255, 255, 255, 0.95)',
        'text-glass-light': 'rgba(255, 255, 255, 0.8)',
        'text-glass-muted': 'rgba(255, 255, 255, 0.6)',
        'text-glass-subtle': 'rgba(255, 255, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-glass-primary': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-glass-secondary': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'gradient-glass-hero': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
        'gradient-electric': 'linear-gradient(135deg, #0066ff 0%, #3385ff 100%)',
        'gradient-dark-space': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
      },
      backdropBlur: {
        'glass-light': '8px',
        'glass-medium': '16px',
        'glass-heavy': '24px',
        'glass-extreme': '40px',
      },
      boxShadow: {
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-md': '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.25), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        'glass-xl': '0 24px 64px rgba(0, 0, 0, 0.5), 0 12px 24px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.25)',
        'electric-glow': '0 4px 16px rgba(0, 102, 255, 0.4)',
        'electric-glow-lg': '0 8px 24px rgba(0, 102, 255, 0.4)',
      },
      fontSize: {
        'massive-glass': 'clamp(4rem, 12vw, 12rem)',
        'hero-glass': 'clamp(3rem, 8vw, 8rem)',
        'display-glass': 'clamp(2rem, 6vw, 4rem)',
        'headline-glass': 'clamp(1.5rem, 4vw, 2.5rem)',
      },
      fontFamily: {
        'system': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'background-flow': 'backgroundFlow 20s ease-in-out infinite',
        'float-glass': 'floatGlass 8s ease-in-out infinite',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        backgroundFlow: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        floatGlass: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(5deg)',
            opacity: '0.8'
          },
        },
      },
      transitionTimingFunction: {
        'glass': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '36': '9rem',
        '44': '11rem',
        '52': '13rem',
        '60': '15rem',
        '68': '17rem',
        '76': '19rem',
        '84': '21rem',
        '92': '23rem',
        '100': '25rem',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '100': '100',
      },
    },
  },
  plugins: [],
}