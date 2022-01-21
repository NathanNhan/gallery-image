import React from 'react';
import Search from "./components/search/Search";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default function App() {
  return (
    <MuiThemeProvider>
      <div>
      <Search />
      </div>
    </MuiThemeProvider>
  )
}

