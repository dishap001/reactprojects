// Task.js

import React from 'react';

const Task = (props) => {
  const taskStyle = {
    backgroundColor: props.completed ? 'green' : 'white',
  };

  return (
    <div key={props.id} className="task" style={taskStyle}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      <button onClick={() => props.completeTask(props.id)}>Completed</button>
    </div>
  );
};

export default Task;
