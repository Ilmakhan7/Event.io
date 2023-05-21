import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
