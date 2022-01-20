import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { DemoProvider } from './Context/DemoContext';
import { ThemeProvider } from './Context/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <DemoProvider>
          <App />
        </DemoProvider>
      </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
