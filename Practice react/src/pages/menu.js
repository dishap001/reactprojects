
import React, { useState } from 'react';
import Task from '../task';

const Menu = () => {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewtask] = useState('');

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const addTask = () => {
    const newTask = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newtask,
      completed: false,
    };
    setTodolist([...todolist, newTask]);
    setNewtask('');
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <h1>CRUD operations - Todo list</h1>
      <div className="addTask">
        <input value={newtask} onChange={handleChange} placeholder="Enter task" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todolist.map((task) => (
          <Task
            key={task.id}
            completed={task.completed}
            taskName={task.taskName}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
