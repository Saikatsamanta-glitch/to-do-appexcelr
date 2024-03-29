import Task from "../Components/Task";
import { useState } from "react";
export default function Home() {
  const [tasklist, setTasklist] = useState(["Work on bug #21","Api call","Check with FE","Machine learning algo",]);
  const [inp, setInp] = useState("");
  const inpfun = (e) => {
    setInp(e.target.value);
  };

  return (
    <center>
      <h1>React To-do 🌟</h1>
      <input type="text" className="inp" onChange={inpfun} />
      <button id="add" onClick={() => setTasklist([...tasklist, inp])}>
        Add
      </button>
      {tasklist.map((v, i) => (
        // <h1 onClick={()=>{delfun(i)}} key={i}>{v}</h1>
        <Task key={i} i={i} data={v} tasklist={tasklist} setTasklist={setTasklist} />
      ))}
    </center>
  );
}

// 50% React Hooks: useState
