import { useState } from "react";
import "../App.css";
import Clear from "./Clear";
import Display from "./Display";
import Equals from "./Equals";
import Numbers from "./Numbers";
import Operators from "./Operators";

function App() {
    const [state, setState] = useState({
        total: 0,
        currentNumber: "",
        operator: "",
        hasDecimal: false
    })

  return (
    <div className="calculator">
      <Display state={state}/>
      <Numbers state={state} setState={setState}/>
      <Operators state={state} setState={setState}/>
      <Equals state={state} setState={setState}/>
      <Clear setState={setState}/>
    </div> 
  );
}

export default App;
