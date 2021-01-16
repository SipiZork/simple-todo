import React from 'react'

const TodoItem = ({ item, setDone, removeItem }) => {
  return (
    <div className={`todo${item.done ? ' done' : ''}`}>
      <div className="name">{item.name}</div>
      <div className="buttons">
        <div className="done btn btn-green" onClick={(e) => setDone(item.id)}><i className={`fas fa-${item.done ? 'times' : 'check'}`}></i></div>
        <div className="done btn btn-red" onClick={(e) => removeItem(item.id)}><i className="fas fa-trash-alt"></i></div>
      </div>
    </div>
  )
}

export default TodoItem;
