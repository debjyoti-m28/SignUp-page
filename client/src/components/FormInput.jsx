import React, { useState } from 'react'
import "./formInput.css"

export const FormInput = (props) => {
    const [focused, setFocuesd] = useState(false);
    const {id, onChange,errorMsg, ...inputProps} = props;
    
    const handleFocus = (e) =>{
        setFocuesd(true);
    }

  return (
    <div className='formInput'> 
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()}
        onFocus={()=>inputProps.name==="cpassword" && setFocuesd(true)}
        />
        <span>{errorMsg}</span>

    </div>
  )
}
