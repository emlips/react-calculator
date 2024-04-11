import { useState } from "react";
import "../App.css";
import Clear from "./Clear";
import Display from "./Display";
import Equals from "./Equals";
import Numbers from "./Numbers";
import Operators from "./Operators";
import Delete from "./Delete";

function App() {
    const [state, setState] = useState({
        total: 0,
        currentNumber: "",
        operator: "",
        hasDecimal: false,
        isNegative: false
    })

  return (
    <div className="calculator">
      <Display state={state} setState={setState}/>
      <Numbers state={state} setState={setState}/>
      <Operators state={state} setState={setState}/>
      <Equals state={state} setState={setState}/>
      <Clear state={state} setState={setState}/>
      <Delete state={state} setState={setState}/>
    </div> 
  );
}

export default App;
