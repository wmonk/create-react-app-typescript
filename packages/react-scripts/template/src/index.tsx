import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@gssfed/vital-ui-kit-react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
