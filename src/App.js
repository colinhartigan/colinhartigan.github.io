import React from 'react';
import './App.css';

//pages
import Home from './pages/Home'
import Explore from './pages/Explore'

//utilities
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//components
import TopBar from './components/TopBar'
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter } from "react-router-dom";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    },
})

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <TopBar />

                <HashRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Router path="/explore">
                            <Explore />
                        </Router>
                    </Switch>
                </HashRouter>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;