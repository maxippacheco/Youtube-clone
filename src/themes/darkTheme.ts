
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      'secondary': '#AAA'
    }
  
  },

  components:{
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ":hover": {
            // backgroundColor: 'rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },
    // MuiButton: {
    //   defaultProps: {
    //     variant: 'outlined',
    //     size: 'small',
    //     disableElevation: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       textTransform: 'none',
    //       boxShadow: 'none',
    //       borderRadius: 10,
    //       backgroundColor: red[500],
    //       color: 'white',
    //       borderColor: red[600],
    //       ":hover": {
    //         backgroundColor: red[800],
    //         color: 'white',
    //         borderColor: red[900]
    //       }
    //     }
    //   }
    // }
  }
  
});
