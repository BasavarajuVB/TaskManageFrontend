
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { login } from '../../services/authService';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineLogin } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login: setAuthToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, userId } = await login(username, password);
      setAuthToken(token, userId);
      toast.success('Login successful!', { className: 'success-toast' });
      navigate('/');
    } catch (err) {
      toast.error(err.error || 'Login failed. Please try again.', { className: 'error-toast' });
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-btn">
          Login <AiOutlineLogin />
        </button>
      </form>
      <div className="auth-footer">
        <span>Don't have an account? </span>
        <Link to="/register">Register here</Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

