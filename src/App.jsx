import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import DashboardPage from './components/DashboardPage';
import IDRegistrationPage from './components/IDRegistrationPage';
import ProfilePage from './components/ProfilePage';
import AnalyticsPage from './components/AnalyticsPage';
import AddRoomsPage from './components/AddRoomsPage';
import AccessControlsPage from './components/AccessControlsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/id-registration" element={<IDRegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/add-rooms" element={<AddRoomsPage />} /> 
        <Route path="/access-controls" element={<AccessControlsPage />} />
      </Routes>
    </Router>
  );
};

export default App;