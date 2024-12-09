import axios from 'axios';

const API_URL = 'https://taskmangebackend.onrender.com/api/tasks/';

const getAuthConfig = () => ({
  headers: { 
    Authorization: `Bearer ${localStorage.getItem('token')}` 
  }
});

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${API_URL}${id}`, taskData, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};