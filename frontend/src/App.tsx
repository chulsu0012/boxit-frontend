import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FindPasswordPage from './pages/FindPassword';
import JoinPage from './pages/Join';
import LandingPage from './pages/Landing/index';
import LoginPage from './pages/Login/index';
import usePageStore from './store/pageStore';

const App: React.FC = () => {
  const currentPage = usePageStore((state) => state.currentPage);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={currentPage} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/create" element={<JoinPage />} />
          <Route path="/user/find-password" element={<FindPasswordPage />} />
          {/* <Route path="/user/profile" element={<FindPasswordPage />} /> */}
          {/* <Route path="/main" element={<FindPasswordPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;