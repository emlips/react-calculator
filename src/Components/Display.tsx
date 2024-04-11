import { useEffect } from "react";
import Props from "./props";

export default function Display({ state }: Props) {
  const {currentNumber, total, operator} = state
  useEffect(() => {}, [currentNumber])

  return (
    <div className="display">
      <p>{total.toString().slice(0,12)} {operator}</p>
      <h1>{currentNumber.slice(0,12)}</h1>
    </div>
  );
}
