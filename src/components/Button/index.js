import React from 'react'

const  Button = ({
    type,
    label,
    disabled,
    className,
    onClick,
    Icons
}) => {
  return (
    <>
    <button onClick={onClick} type={type} className={`px-5 py-2.5 text-center  flex items-center justify-center gap-1  rounded-lg  font-medium ${className}`} disabled={disabled}> {Icons} {label}</button>
    </>
    
  )
}

export default Button