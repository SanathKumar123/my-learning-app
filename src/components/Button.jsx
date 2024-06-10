import React from 'react'
interface props {
    children: String;
    color?: "primary" | "secondary";
    onClick: () => void;
}

export const Button = ({children, color, onClick}: props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}
