// import React, { useState, useEffect } from 'react';
// import { getTasks, deleteTask } from '../../services/taskService';
// import TaskForm from './TaskForm';
// import Modal from '../Common/Modal';
// import '../../styles/TaskList.css';


// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const fetchedTasks = await getTasks();
//       setTasks(fetchedTasks);
//     } catch (error) {
//       console.error('Failed to fetch tasks', error);
//     }
//   };

//   const handleDelete = async (taskId) => {
//     try {
//       await deleteTask(taskId);
//       fetchTasks();
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };

//   const handleEdit = (task) => {
//     setSelectedTask(task);
//     setIsModalOpen(true);
//   };

//   const filteredTasks = tasks.filter(task => 
//     filter === 'All' || task.status === filter
//   );

//   return (
//     <div>
//       <div>
//         <select onChange={(e) => setFilter(e.target.value)}>
//           <option value="All">All Tasks</option>
//           <option value="To Do">To Do</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>

//         <button onClick={() => setIsModalOpen(true)}>
//           Add New Task
//         </button>
//       </div>

//       <div>
//         {filteredTasks.map(task => (
//           <div key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Status: {task.status}</p>
//             <button onClick={() => handleEdit(task)}>Edit</button>
//             <button onClick={() => handleDelete(task.id)}>Delete</button>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && (
//         <Modal onClose={() => {
//           setIsModalOpen(false);
//           setSelectedTask(null);
//         }}>
//           <TaskForm 
//             task={selectedTask} 
//             onTaskAdded={fetchTasks}
//             onClose={() => {
//               setIsModalOpen(false);
//               setSelectedTask(null);
//             }}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default TaskList;
// import React, { useState, useEffect } from 'react';
// import { getTasks, deleteTask } from '../../services/taskService';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import Modal from '../Common/Modal';
// import "../../styles/Tasks.css"

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const fetchedTasks = await getTasks();
//       setTasks(fetchedTasks);
//     } catch (error) {
//       console.error('Failed to fetch tasks', error);
//     }
//   };

//   const handleDelete = async (taskId) => {
//     try {
//       await deleteTask(taskId);
//       fetchTasks();
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };

//   const handleEdit = (task) => {
//     setSelectedTask(task);
//     setIsModalOpen(true);
//   };

//   const filteredTasks = tasks.filter(task => 
//     filter === 'All' || task.status === filter
//   );

//   return (
//     <div className="task-list-container">
//       <div className="task-controls">
//         <select 
//           className="task-filter" 
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All Tasks</option>
//           <option value="To Do">To Do</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>

//         <button 
//           className="btn btn-primary add-task-btn" 
//           onClick={() => setIsModalOpen(true)}
//         >
//           Add New Task
//         </button>
//       </div>

//       <div className="task-grid">
//         {filteredTasks.map(task => (
//           <TaskItem 
//             key={task.id}
//             task={task}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>

//       {isModalOpen && (
//         <Modal onClose={() => {
//           setIsModalOpen(false);
//           setSelectedTask(null);
//         }}>
//           <TaskForm 
//             task={selectedTask} 
//             onTaskAdded={fetchTasks}
//             onClose={() => {
//               setIsModalOpen(false);
//               setSelectedTask(null);
//             }}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default TaskList;

import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../../services/taskService';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import Modal from '../Common/Modal';
import "../../styles/Tasks.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'All' || task.status === filter
  );

  return (
    <div className="task-list-container">
      <div className="task-controls">
        <select 
          className="task-filter" 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Tasks</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button 
          className="btn btn-primary add-task-btn" 
          onClick={() => setIsModalOpen(true)}
        >
          Add New Task
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <h1 className="no-tasks">No Tasks Available</h1>
      ) : (
        <div className="task-grid">
          {filteredTasks.map(task => (
            <TaskItem 
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={() => {
          setIsModalOpen(false);
          setSelectedTask(null);
        }}>
          <TaskForm 
            task={selectedTask} 
            onTaskAdded={fetchTasks}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedTask(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default TaskList;
