import { useEffect, useRef, useState } from 'react';
import './App.css';
import TodoList from './todolist'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  function addTodo() {
    const name = todoNameRef.current.value;
    if (name == '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name, checked: false }]
    })
    todoNameRef.current.value = '';
  }

  function toggleChecked(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id == id);
    todo.checked = !todo.checked;
    setTodos(newTodos);
  }

  function clearTodos() {
    setTodos([])
  }

  return (
    <>
      <TodoList todos={todos} toggleChecked={toggleChecked} />
      <input type="text" ref={todoNameRef} />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear List</button>
      <p>{todos.filter(todo => !todo.checked).length} items pending</p>
    </>
  );
}

export default App;
