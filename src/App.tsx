import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectListingPage from './pages/ProjectListingPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SubmitProposalPage from './pages/SubmitProposalPage';
import MessagingPage from './pages/MessagingPage';
import FreelancerDashboardPage from './pages/FreelancerDashboardPage';
import ClientDashboardPage from './pages/ClientDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectListingPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
            <Route path="/projects/:id/submit-proposal" element={<SubmitProposalPage />} />
            <Route path="/messages" element={<MessagingPage />} />
            <Route path="/freelancer/dashboard" element={<FreelancerDashboardPage />} />
            <Route path="/client/dashboard" element={<ClientDashboardPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;