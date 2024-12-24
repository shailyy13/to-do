import React from 'react';
import './App.css'
import { TodoProvider } from './components/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
const App = () => {
  return (
    <TodoProvider>
      <h1>To-Do Application</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default App;