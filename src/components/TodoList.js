import React from 'react';
import { useTodos } from './TodoContext';

const TodoList = () => {
  const { todos, deleteTodo, toggleComplete } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.task}
          </span>
          <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
