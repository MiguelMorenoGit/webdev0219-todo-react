import React, { Component } from 'react';

class TaskComponent extends Component {
  render() {
    const {todo, onDelete, onComplete} = this.props;
    return (
      <li>
        {todo.title} 
        <button onClick={() => onDelete(todo.id)}>x</button>
        <button onClick={() => onComplete(todo.id)}>
          {todo.isDone ? 'Completado' : 'Complétame'}
          {/* {todo.isDone && 'Completado'} */}
          {/* {!todo.isDone && 'Complétame'} */}
        </button>
      </li>
    );
  }
}

export default TaskComponent;