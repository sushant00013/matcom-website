/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- CUSTOM COLORS (Sci-Fi Theme) ---
      colors: {
        neonBlue: '#00f3ff',
        neonPurple: '#bc13fe',
        darkBg: '#050505',
      },
      
      // --- FONTS ---
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      // --- ANIMATION LIST ---
      animation: {
         "spin-slow": "spin 8s linear infinite",
        // Hero Section
        "meteor-effect": "meteor 5s linear infinite",
        
        // Neon Flux Card
        "gradient-xy": "gradient-xy 3s ease infinite",
        
        // Reactor Card (Spinning Border)
        "spin-slow": "spin 8s linear infinite",
        "spin-fast": "spin 3s linear infinite",
        
        // Glitch Card (Hacking Effect)
        "shake": "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
        "glitch-1": "glitch-1 2s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 2s infinite linear alternate-reverse",
      },

      // --- KEYFRAMES (Animation Logic) ---
      keyframes: {
        // 1. Meteor Logic
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        
        // 2. Moving Gradient Logic
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },

        // 3. Shake Logic (Vibration)
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        },

        // 4. Glitch Layer 1 (Red Shift)
        "glitch-1": {
          "0%": { clipPath: "inset(20% 0 80% 0)" },
          "20%": { clipPath: "inset(60% 0 10% 0)" },
          "40%": { clipPath: "inset(40% 0 50% 0)" },
          "60%": { clipPath: "inset(80% 0 5% 0)" },
          "80%": { clipPath: "inset(10% 0 70% 0)" },
          "100%": { clipPath: "inset(30% 0 20% 0)" },
        },

        // 5. Glitch Layer 2 (Cyan Shift)
        "glitch-2": {
          "0%": { clipPath: "inset(10% 0 60% 0)" },
          "20%": { clipPath: "inset(30% 0 20% 0)" },
          "40%": { clipPath: "inset(10% 0 80% 0)" },
          "60%": { clipPath: "inset(70% 0 10% 0)" },
          "80%": { clipPath: "inset(50% 0 30% 0)" },
          "100%": { clipPath: "inset(20% 0 60% 0)" },
        },
      },
    },
  },
  plugins: [],
}