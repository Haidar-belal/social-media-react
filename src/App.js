import * as React from 'react';
import { Feed, Rigthbar, Navbar, Saidbar, Add } from './components';
import { Stack, Box, ThemeProvider, createTheme } from '@mui/material';


function App() {

  const [mode, setMode] = React.useState('light')

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar />
          <Stack direction='row' gap={2} justifyContent='space-between' marginTop={2}>
            <Saidbar mode={mode} setMode={setMode}/>
            <Feed />
            <Rigthbar />
          </Stack>
          <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;
