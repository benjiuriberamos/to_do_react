import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

function Modal({ children}) {
  
  return (
    <div
        className='ModalBackground'
    >
        {children}
    </div>
  );
}

export { Modal };
