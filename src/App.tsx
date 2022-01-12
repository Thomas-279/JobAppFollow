import React from 'react';

import { Header, Demo, Footer } from './components';

function App() {
  return (
    <div className="flex flex-col h-screen gradient-bg-welcome">
      <div className="flex-auto">
        <div className="flex flex-col justify-between items-center h-full space-y-4">
          <Header />
          <Demo />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
