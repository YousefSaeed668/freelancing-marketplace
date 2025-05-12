import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectListingPage from './pages/ProjectListingPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SubmitProposalPage from './pages/SubmitProposalPage';
import MessagingPage from './pages/MessagingPage';
import FreelancerDashboardPage from './pages/FreelancerDashboardPage';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <FreelancerDashboardPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;