import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">Haz completado {completedTodos} de {totalTodos} tareas.</h1>
  );
}

export { TodoCounter };
