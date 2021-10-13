import React,{useState} from "react";
import axios from "axios";

function Form() {
  const [fname, setFname] = useState('');
  const [summary, setSummary] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:5000/user`, { fname,summary})
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname" onChange={(e)=>setFname(e.target.value)} placeholder="first name.." />
        <input type="text" name="summary" placeholder="summary" onChange={(e)=>setSummary(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
