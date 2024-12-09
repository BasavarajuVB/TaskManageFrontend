
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { register } from '../../services/authService';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Auth.css';
import { AiOutlineLogin } from 'react-icons/ai';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Input validation
      if (username.length < 3) {
        toast.error('Username must be at least 3 characters long', {
          className: 'error-toast',
        });
        return;
      }

      if (password.length < 6) {
        toast.error('Password must be at least 6 characters long', {
          className: 'error-toast',
        });
        return;
      }

      // Attempt registration
      await register(username, password);

      toast.success('Registration successful! Redirecting...', {
        className: 'success-toast',
      });

      setTimeout(() => navigate('/login'), 2000); // Redirect after success
    } catch (err) {
      toast.error(err.error || 'Registration failed', {
        className: 'error-toast',
      });
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="input-container">
          {/* <FaUser className="input-icon" /> */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          {/* <FaLock className="input-icon" /> */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Register <AiOutlineLogin/>
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Register;