import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

const App = () => {
  
  const [input, setInput] = useState('');

  const [todolist, setTodolist] = useState([]);

  const sendTodo = (e) => {
    if (e.keyCode === 13) {
      setTodolist(todolist => [...todolist, { id: uuidv4(), name: e.target.value, done: false }]);
      setInput('');
    }
  }

  const setDone = (id) => {
    let newArray = [...todolist];
    newArray.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
    });
    setTodolist(newArray);
  }

  const removeItem = (id) => {
    let newArray = [...todolist];
    setTodolist(newArray.filter(item => item.id !== id));
  }

  return (
    <div className="container">
      <div className="add-todo">
        <input
          type="text"
          placeholder="Adj hozzá egy feladatot"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => sendTodo(e)} />
      </div>
      <div className="todos">
        {todolist.filter(item => !item.done).map(item =>
          <TodoItem item={item} key={item.id} setDone={setDone} removeItem={removeItem} />
        )}
        {todolist.filter(item => item.done).map(item =>
          <TodoItem item={item} key={item.id} setDone={setDone} removeItem={removeItem} />
        )}
      </div>
    </div>
  );
}

export default App;
