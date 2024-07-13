import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import { UserProvider } from './contexts/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
