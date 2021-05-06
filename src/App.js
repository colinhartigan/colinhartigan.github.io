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
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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

                <Router>
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
                </Router>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;