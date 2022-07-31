
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      'secondary': '#AAA'
    }
  
  },

  components:{
		MuiAppBar: {
			styleOverrides:{
				root: {
					backgroundColor: 'white'
				}
			}		
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: 'black'
				}
			}
		},
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          backgroundColor: red[500],
          borderColor: red[600],
          ":hover": {
            backgroundColor: red[800],
            color: 'white',
            borderColor: red[900]
          }
        }
      }
    }
  }
  
});
