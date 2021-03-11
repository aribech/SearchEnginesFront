
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider , createMuiTheme} from "@material-ui/core/styles";

import {blue} from "@material-ui/core/colors";
import { NavBar } from './Navbar.js';
import { Footer } from './Footer';
import { Home } from './home';
import { SearchEngines } from './SearchEngineList';
import { NewSearchEngine } from './NewSearchEngine/NewSearchEngine';


const theme = createMuiTheme({
    typography: {
        h2 : {
            fontSize : 24,
        }
    },
    palette : {
        primary : { main: blue[500], }
    }
})


function App() {

  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <div className="App">
            <header className="App-header">
                
                <NavBar></NavBar>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/Home' component={Home} exact />
                    <Route path='/SearchEngines' component={SearchEngines} exact />
                    <Route path='/NewSearchEngine' component={NewSearchEngine} exact />
                </Switch>
                <Footer></Footer>
            </header> 
            
            </div>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;