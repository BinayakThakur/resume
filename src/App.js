
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Nav from './components/Nav';
import FullWidthTabs from './components/Tab';




const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
      light: '#f5e9e9',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#f50057',
      dark: '#ccff90',
    },
    background: {
      default: '#ff4081',
      paper: '#5C985C',
    },
    text: {
      primary: 'rgba(251,250,250,0.87)',
      secondary: '#76ff03',
      disabled: 'rgba(111,109,109,0.38)',
      hint: 'rgba(214,214,47,0.38)',
    },
    divider: 'rgba(245,245,245,0.12)',
  },
});
function App() {
  return (
   
    <div className="App gradient-background">
       <ThemeProvider theme={darkTheme}>
      <Nav> </Nav>
      <FullWidthTabs></FullWidthTabs>
      </ThemeProvider>
    </div>
   

  );
}

export default App;
