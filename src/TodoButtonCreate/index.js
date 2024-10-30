import './TodoButtonCreate.css';

function TodoButtonCreate({setOpenModal, openModal, children}) {
  return (
    <button
      className='CreateTodoButton'
      onClick={(event) => {
        setOpenModal(state => !state)
      }}
    >
      {children}
    </button>
  );
}

export { TodoButtonCreate };


