import React from 'react';
import { BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home.js'
import Memorial from './Memorial.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


const App = () => (
  <MuiThemeProvider>
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/memorial" component={Memorial}/>
    </div>
  </Router>
  </MuiThemeProvider>
);

export default App;
