import React from 'react'
import { forwardRef,useId } from 'react'
// we used forward ref to give th reference to input but there state is present in separate folder
// we used useId for when we click on the label selected input filed blinks
 
const Input = forwardRef( function(
{label,
type='text',
className,
...props},ref
){
    const id = useId()
    return (
        <div className='w-full'>
            {label &&  <label className='inline-block mb-1 pl-1'
              htmlFor={id}>
                {label}</label>}

            <input type={type} 
            className={`px-3 py-2 rounded-lg bg-white text-black
             outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
             ref={ref}
             id={id}
             {...props}
             />
        </div>
    )
})


export default Input