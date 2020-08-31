import { deepFreeze } from 'grommet/utils';

type BorderSidesType =
  | 'all'
  | 'horizontal'
  | 'vertical'
  | 'start'
  | 'end'
  | 'top'
  | 'left'
  | 'bottom'
  | 'right'
  | 'between'
  | undefined;

export const customTheme = deepFreeze({
  global: {
    font: {
      family: 'Muli',
      face: `/* vietnamese */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58m-xDwxUD2GF9Zc.woff) format('woff');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-xDwxUD2GF9Zc.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-xDwxUD2GFw.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        /* vietnamese */
        @font-face {
          font-family: 'Muli';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40e6fwniDtzNAAw.woff) format('woff');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Muli';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50e6fwniDtzNAAw.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Muli';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30e6fwniDtzM.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }`,
      size: '15px',
      height: '20px',
      maxWidth: '300px',
    },
    colors: {
      brand: '#ff5f40',
      hoverBrand: '#ffaf95',
      control: '#ff5f40',
      focus: '#ffc7c7',
      border: 'accent-1',
      'accent-1': '#9fd4c9',
      'accent-2': '#6ebfb5',
      'accent-3': '#24a19c',
      'dark-1': '#000001',
      'dark-2': '#646569',
      'dark-3': '#222222',
      'neutral-1': '#646569',
      'neutral-2': '#004876',
      'neutral-3': '#004876',
      'status-critical': '#dd3000',
      'status-warning': '#f0c954',
      'status-ok': '#008375',
      'status-unknown': '#C3C5C8',
      'status-disabled': '#C3C5C8',
    },
    control: {
      border: {
        width: '1px',
        radius: '25px',
      },
    },
    hover: {
      background: 'hoverBrand',
      color: 'white',
    },
  },
  anchor: {
    hover: {
      extend: () => ({
        fontWeight: 600,
        textDecoration: 'none',
      }),
    },
    color: {
      dark: 'brand',
      light: 'accent-3',
    },
    fontWeight: 500,
  },
  heading: {
    weight: 600,
  },
  formField: {
    border: {
      color: 'brand',
      side: 'all' as BorderSidesType,
    },
  },
  button: {
    color: 'white',
    border: {
      radius: '25px',
      width: '0px',
    },
    primary: {
      extend: () => ({
        minWidth: '15vw',
      }),
    },
  },
  text: {
    medium: {
      size: '20px',
    },
  },
});
