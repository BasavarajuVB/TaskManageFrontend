
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createTask, updateTask } from '../../services/taskService';
import './TaskForm.css';
import { FaEdit, FaPlus, FaTimes } from 'react-icons/fa';

const TaskForm = ({ task, onTaskAdded, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [error, setError] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      const taskData = { title, description, status };

      if (task) {
        // Update existing task
        await updateTask(task.id, taskData);
      } else {
        // Create new task
        await createTask(taskData);
      }

      onTaskAdded();
      onClose();
    } catch (err) {
      setError(err.error || 'Failed to save task');
    }
  };

  return (
    <div className="task-form-container">
      <div className="task-form">
        <h2 className="form-title">
          {task ? (
            <>
              <FaEdit className="icon" /> Edit Task
            </>
          ) : (
            <>
              <FaPlus className="icon" /> Create New Task
            </>
          )}
        </h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description (optional)"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {task ? 'Update Task' : 'Create Task'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              <FaTimes className="icon" /> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string
  }),
  onTaskAdded: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default TaskForm;
