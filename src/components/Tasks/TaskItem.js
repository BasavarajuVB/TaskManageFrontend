import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import '../../styles/Tasks.css'

const TaskItem = ({ 
  task, 
  onEdit, 
  onDelete, 
  className = '' 
}) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'To Do':
        return 'text-warning';
      case 'In Progress':
        return 'text-info';
      case 'Completed':
        return 'text-success';
      default:
        return '';
    }
  };

  return (
    <div className={`task-item ${className}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <span className={`task-status ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
      </div>
      
      <div className="task-body">
        <p className="task-description">{task.description || 'No description'}</p>
      </div>
      
      {/* <div className="task-actions">
        <button 
          className="btn btn-edit" 
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button 
          className="btn btn-delete" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div> */}
       <div className="task-actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(task)}
        >
          <FiEdit /> 
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
        >
          <FiTrash2 /> 
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(['To Do', 'In Progress', 'Completed']).isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default TaskItem;

// src/components/TaskCard/TaskCard.js
// import React from 'react';
// import PropTypes from 'prop-types';
// import { FaEdit, FaTrash, FaCalendarAlt, FaClock ,FaSpinner,FaCheckCircle} from 'react-icons/fa';
// import "./TaskItem.css"

// const TaskItem = ({ 
//   task, 
//   onEdit, 
//   onDelete, 
//   className = '' 
// }) => {
//     const getStatusColor = (status) => {
//         switch (status.toLowerCase()) {
//           case 'pending':
//             return '#f59e0b';
//           case 'in-progress':
//             return '#3b82f6';
//           case 'completed':
//             return '#10b981';
//           default:
//             return '#6b7280';
//         }
//       };
  



// const getStatusIcon = (status) => {
//     switch (status) {
//       case 'pending':
//         return <FaClock className='icon'/>;
//       case 'in-progress':
//         return <FaSpinner className="spin-icon icon" />;
//       case 'completed':
//         return <FaCheckCircle className='icon'/>;
//       default:
//         return null;
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 }
//   };

//   return (
//     <div
//     className="task-card"
//     data-status={task.status.toLowerCase()}
//     variants={cardVariants}
//     initial="hidden"
//     animate="visible"
//     exit="exit"
//     layout
//     >
//       <div className="task-header">
//         <h3>{task.title}</h3>
//         <div className="task-actions">
//           <button
         
//          onClick={() => onEdit(task)}
//             className="edit-btn"
//           >
//             <FaEdit size={18}/>
//           </button>
//           <button
//             onClick={() => onDelete(task.id)}
//             className="delete-btn"
//           >
//             <FaTrash size={18}/>
//           </button>
//         </div>
//       </div>

//       <p className="task-description">{task.description}</p>

//       <div className="task-footer">

//         <div
//           className="task-status"
//           style={{
//             backgroundColor: `${getStatusColor(task.status)}20`,
//             color: getStatusColor(task.status)
//           }}
//           >
//               <span className="status-icon">{getStatusIcon(task.status)}</span>
//               {task.status}
//           </div>
     
//         </div>
        
//       </div>
//     );
//   };
  
//   export default TaskItem;