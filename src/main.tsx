import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { DemoProvider } from './Context/DemoContext';

ReactDOM.render(
  <DemoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DemoProvider>,
  document.getElementById('root')
);
