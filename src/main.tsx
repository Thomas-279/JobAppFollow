import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from './Context/ThemeContext';
import { CurrentUserProvider } from './Context/CurrentUserContext';

ReactDOM.render(
    <React.StrictMode>
      <CurrentUserProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
      </CurrentUserProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
