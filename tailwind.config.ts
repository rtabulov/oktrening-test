import defaultTheme from 'tailwindcss/defaultTheme';
import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts}', './src/views/**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
export default config;
