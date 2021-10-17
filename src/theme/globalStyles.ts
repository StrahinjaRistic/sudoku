import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: var(--background-color);
  color: var(--color-blue);
  font-family: 'Source Sans Pro', sans-serif;
	line-height: 1.4em;
  font-weight: 300;
  }
  :root {
  --background-color: #fff;
  --color-blue: hsl(210, 88%, 56%);
  --color-grey: hsl(213, 30%, 29%);
  --color-grey-light: hsl(213, 30%, 59%);
  --color-grey-lighter: hsl(213, 30%, 79%);
  --color-orange: hsl(34, 26%, 89%);
  --color-orange-dark: hsl(34, 76%, 89%);
}
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default GlobalStyle;
