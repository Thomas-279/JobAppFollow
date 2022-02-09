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
      <div className={`flex flex-col min-h-screen text-gray-50 ${darkMode ? 'darkbg' : 'lightbg' }`}>
        <div className="flex-auto">
          <div className="min-h-screen flex flex-col justify-between items-center space-y-10">
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
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
