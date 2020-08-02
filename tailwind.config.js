module.exports = {
  purge: [ './src/**/*.js',],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width' : 'width',
      },
      fontFamily: {
        "athene": "Athene",
        "ArabicDroid": "Droid-Kufti"
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        'monster': '10rem',
      },
    },
    fontFamily: {
      body: ['Droid Arabic Kufi', 'sans-serif'],
      display: ['Droid Arabic Kufi', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}
