import React from 'react'

function Button({
children,
className,
bg_color,
text_color='white',
...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bg_color} ${text_color} ${className}`} 
    {...props}>
        {children}</button>
  )
}

export default Button