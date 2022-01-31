import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import { CurrentUserContext } from './Context/CurrentUserContext';

import { Header, Demo, Footer, Home, Login, JobSearch, Error } from './components';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Router>
      <div className={`flex flex-col h-screen ${darkMode ? 'gradient-bg-welcome text-gray-50' : 'gradient-lightMode text-gray-200' }`}>
        <div className="flex-auto">
          <div className="flex flex-col justify-between items-center h-full space-y-4">
            <Header />
            <Routes>
              <Route path='/' element={<Home darkMode={darkMode} />} />
              <Route path='/demo' element={<Demo darkMode={darkMode} />} />
              <Route path='/login' element={<Login darkMode={darkMode} />} />
              {currentUser?.isAuthenticated && 
                <Route path='/jobsearch' element={<JobSearch darkMode={darkMode} />} />
              }
              <Route path='/*' element={<Error darkMode={darkMode} />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
