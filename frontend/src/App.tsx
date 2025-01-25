import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing/index';
import LoginPage from './pages/Login/index';
import usePageStore from './store/pageStore';
import './App.css'

const App: React.FC = () => {
  const currentPage = usePageStore((state) => state.currentPage);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={currentPage} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/user/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;