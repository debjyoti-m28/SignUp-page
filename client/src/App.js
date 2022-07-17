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
    placeholder: "Name"
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Email"
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
    placeholder: "PassWord"
  },
  {
    id: 5,
    name: "cpassword",
    type: "password",
    placeholder: "Confirm Password"
  }
 ]
  
 const onChange= (e) => {
     setVal({ ...val, [e.target.name] : e.target.value});
 };

  console.log(val);
  return (
    <div className="App">
      <form>
        {inputs.map(input => (
          <FormInput key={input.id} {...input} value={val[input.name]} onChange= {onChange}/>
        ))}

        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
