import { useState } from 'react';
import './App.css';
import { FormInput } from './components/FormInput';

const App = () =>{
 const [val, setVal] = useState({
     name: "",
     email: "",
     birthday: "",
     password: "",
     cpassword: ""
 });

 const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    requried: true,
    errorMsg :"*It should be a valid email address!"
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birth Date"
  },
  {
    id: 4,
    name: "password",
    type: "text",
    placeholder: "Password",
    requried: true,
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMsg :"*Password should be min 8 characters and include at least 1 letter, 1 number and 1 special character!"
  },
  {
    id: 5,
    name: "cpassword",
    type: "password",
    placeholder: "Confirm Password",
    requried: true,
    pattern: val.password,
    errorMsg :"*Passwoed doesn't match!"
  }
 ]
  
 const onChange= (e) => {
     setVal({ ...val, [e.target.name] : e.target.value});
 };

  console.log(val);
  return (
    <div className="App">
      <form>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput key={input.id} {...input} value={val[input.name]} onChange= {onChange}/>
        ))}

        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
