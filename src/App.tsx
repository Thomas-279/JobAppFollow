import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import { Header, Demo, Footer, Home, Login } from './components';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen gradient-bg-welcome">
        <div className="flex-auto">
          <div className="flex flex-col justify-between items-center h-full space-y-4">
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/demo' element={<Demo />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
