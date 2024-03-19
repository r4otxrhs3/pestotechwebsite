import React from 'react';

const TaskList = ({ tasks, onDelete, onUpdateStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => onUpdateStatus(task.id, 'In Progress')}>
            Start
          </button>
          <button onClick={() => onUpdateStatus(task.id, 'Done')}>
            Complete
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
