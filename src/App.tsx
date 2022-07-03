import { CssBaseline } from '@mui/material'

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes';
import { AppRouter } from './routers';


const App = () => {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App;
