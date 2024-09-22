import React, { useEffect, useState } from 'react';
import { TodoProvider } from './context/index';
import { TodoForm, TodoItem } from './components/index';

function TodoList() {
  const [todos, setTodoList] = useState([]);

  function addTodo(todo) {
    setTodoList((prevValue) => {
      return [
        ...prevValue,
        {
          id: Date.now(),
          ...todo,
        },
      ];
    });
  }

  function deleteTodo(id) {
    setTodoList((prevValue) => prevValue.filter((item) => item.id !== id));
    setTodoList((preValue) => preValue.filter(item => item.id !== id))
  }

  function updateTodo(id, updatedTodo) {
    setTodoList((prevValue) =>
      prevValue.map((item) =>
        item.id === id ? { ...item, ...updatedTodo } : item
      )
    );
  }

  function toggleComplete(id) {
    setTodoList((prevValue) => {
      return prevValue.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  }

  function getTodo() {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) ;
    if (storedTodos.length > 0 && storedTodos) {
      setTodoList(storedTodos);
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className='w-full h-screen font-mono flex flex-col items-center p-9'>
        <p className='text-2xl font-bold uppercase'> My Todo List </p>
        <TodoForm />
        <div className='flex flex-col gap-3'>
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default TodoList;
