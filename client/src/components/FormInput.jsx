import React from 'react'
import "./formInput.css"

export const FormInput = (props) => {
    const {id, onChange, ...inputProps} = props;
  return (
    <div> 
        <input {...inputProps} onChange={onChange}/>
    </div>
  )
}
