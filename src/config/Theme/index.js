import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#9500FF',
      },
      secondary: {
        main: '#290743',
      },
      thirdary: {
        main: '#9661cc'
      }
    },

    background : {
        default : '#4b1a8b',
        ligther : '#141316',
    },

    letter : {
      primary: {
        main: '#ffff'
      }
    },
});

export {theme};

