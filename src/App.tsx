import { CssBaseline } from '@mui/material'

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes';
import { UiProvider } from './context';
import { AppRouter } from './routers';


const App = () => {
  return (
    <UiProvider>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </UiProvider>
  )
}

export default App;
