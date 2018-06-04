import * as React from 'react';
import './App.css';
import { Box, Button } from '@gssfed/vital-ui-kit-react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import logo from './icon.png';
import Overview from './components/Overview';
import Form from './components/Form';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Welcome to React with Vital UI Kit</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Box marginTop="50px">
          Click <a href="http://react.vitaluikit.com/" target="_blank">here</a> to learn more about Vital UI Kit React 🕹
        </Box>
        <Box marginTop="50px">
          <Button.Group>
            <Button link><Link to="/overview">Overview</Link></Button>
            <Button link><Link to="/form">Form Example</Link></Button>
          </Button.Group>
        </Box>
        <div>
          <Route
            path="/overview"
            component={Overview}
          />
          <Route
            path="/form"
            component={Form}
          />
        </div>
      </div>
    );
  }
}

export default App;
