import { useEffect } from "react";

interface DisplayProps {
  state: {
    total: number;
    currentNumber: string;
    operator: string;
    hasDecimal: boolean;
  };
}

export default function Display({ state }: DisplayProps) {
  const {currentNumber, total, operator} = state
  useEffect(() => {}, [currentNumber])

  return (
    <div className="display">
      <p>{total} {operator}</p>
      <h1>{currentNumber.slice(0,12)}</h1>
    </div>
  );
}
