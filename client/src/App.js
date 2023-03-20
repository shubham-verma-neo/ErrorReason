import { MetaProvider } from './MetamaskLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'

import Header from './Components/Header';
import Sample from './Components/Sample';

function App() {
  return (
    <MetaProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Sample />} />
        </Routes>
      </Router>
    </MetaProvider>
  );
}

export default App;
