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
  useEffect(() => {}, [state.currentNumber])

  return (
    <div className="display">
      <h1>{state.currentNumber.slice(0,12)}</h1>
    </div>
  );
}
