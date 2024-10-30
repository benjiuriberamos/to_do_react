import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButtonCreate } from '../TodoButtonCreate';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    openModal, 
    setOpenModal
  } = React.useContext(TodoContext);

    return (
      <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
          }) => (
            <TodoList>
              {loading && <>
                <TodoLoading/>
                <TodoLoading/>
                <TodoLoading/>
              </>}
              {error &&  <TodoError/>}
              {!loading && searchedTodos === 0 &&  <EmptyTodo/>}
        
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
        )}
      </TodoContext.Consumer>
    
    
      <TodoButtonCreate
        setOpenModal={setOpenModal}
      >+</TodoButtonCreate>

      { openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      
    </>
    )
}

export {
    AppUI
}