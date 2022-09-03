module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "transparent",
        
"secondary": "#D926A9",
        
"accent": "#FFFFFF",
        
"neutral": "#191D24",
        
"base-100": "#2c2c2e",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  theme: {
    screens: {
      'xs' :  '330px',
      'sm' :	'400px',
      'mdsm':  '465px',
      '500px': '500px',	
      'md' :	'768px',
      'lg' :	'1024px',	
      'xl' :	'1280px',	
      '2xl' :	'1536px',	

      'iphone5': '423px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
