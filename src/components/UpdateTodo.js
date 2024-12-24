import React, { useState } from 'react';
import { useTodos } from './TodoContext';

const UpdateTodo = ({ id, currentTask, onUpdateComplete }) => {
  const { updateTodo } = useTodos();
  const [updatedTask, setUpdatedTask] = useState(currentTask);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, updatedTask);
    onUpdateComplete();
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTodo;