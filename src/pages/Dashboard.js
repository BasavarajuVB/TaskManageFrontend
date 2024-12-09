import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import TaskList from '../components/Tasks/TaskList';
import { useAuth } from '../components/Auth/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Task Management</h1>
        <button className="logout-btn" onClick={logout}>
          <FiLogOut /> Logout
        </button>
      </header>
      <div className='dashboard-tasks'>
      <TaskList />

      </div>
    </div>
  );
};

export default Dashboard;