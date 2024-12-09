
import axios from 'axios';

const API_URL = 'https://taskmangebackend.onrender.com/api/auth/';

export const register = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'register', { 
      username, 
      password 
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error || 'Registration failed');
    }
  } catch (error) {
    throw error.response?.data || { error: 'Registration failed' };
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'login', { 
      username, 
      password 
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error || 'Login failed');
    }
  } catch (error) {
    throw error.response?.data || { error: 'Login failed' };
  }
};