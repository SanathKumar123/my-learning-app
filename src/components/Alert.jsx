import React from 'react'

interface prop {
    children: String;
    onClose: () => void;
}

export const Alert = ({children, onClose}: prop) => {
  return (
    <div className='alert alert-primary alert-dismissible'> 
    {children} 
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

C:\Users\sanat\my-learning-app\node_modules