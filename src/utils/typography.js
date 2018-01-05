import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.bodyFontFamily = ['Montserrat', 'sans-serif' ].join(' ');
sutroTheme.baseFontSize = '24px';
// sutroTheme.overrideThemeStyles = () => ();

const typography = new Typography(sutroTheme, {
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '700',
        '700i'
      ],
    },
  ],
});


export default typography;