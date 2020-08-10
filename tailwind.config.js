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
        '7xl': '5rem',
      },
      height: {
        'h-29': '7rem',
      }
    },
    fontFamily: {
      body: ['Droid Arabic Kufi', 'sans-serif'],
      display: ['Droid Arabic Kufi', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}
