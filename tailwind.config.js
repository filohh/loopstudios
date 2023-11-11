module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px', 
/*      md: '1280px', */
      lg: '976px',
/*      nb: '768px', */ 
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        sans:['Josefin Sans', 'sans-serif'],
        alata:['Alata'],
      },
      letterSpacing: {
        widest: '.3em'
      },
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
    },
  },
  plugins: [],
}
