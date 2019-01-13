import Typography from "typography"
 
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Sacramento',
      styles: [
        '200',
        '400',
        '700',
      ],
    },
    {
      name: 'Dosis',
      styles: [
        '200',
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Sacramento', 'cursive'],
  bodyFontFamily: ['Dosis', 'sans-serif'],
})

const { rhythm, scale } = typography
export { rhythm, scale, typography as default }