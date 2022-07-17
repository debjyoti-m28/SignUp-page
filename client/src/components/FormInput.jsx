import React from 'react'
import "./formInput.css"

export const FormInput = (props) => {
    const {id, onChange,errorMsg, ...inputProps} = props;
  return (
    <div className='formInput'> 
        <input {...inputProps} onChange={onChange}/>
        <span>{errorMsg}</span>

    </div>
  )
}
