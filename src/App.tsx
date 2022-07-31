import { useContext, useEffect, useState } from 'react';

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';

import { UiContext, UiProvider } from './context';
import { AppRouter } from './routers';
import { darkTheme } from './themes';

const App = () => {

  // todo: fix theme stuff
  const { theme } = useContext( UiContext );


  return (
    <ThemeProvider theme={ darkTheme }>
        <UiProvider>
        <CssBaseline />
        <AppRouter />
      </UiProvider>
      </ThemeProvider>
  )
}

export default App;
