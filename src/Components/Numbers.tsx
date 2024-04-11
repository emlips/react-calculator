import { useState } from "react";

interface NumbersProps {
  state: {
    total: number;
    currentNumber: string;
    operator: string;
    hasDecimal: boolean;
  };
  setState: (arg0: any) => void;
}

export default function Numbers({ setState, state }: NumbersProps) {
  const { currentNumber, hasDecimal } = state;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+/-"];
  const [isNegative, setIsNegative] = useState(false);

  const handleClick = (number: any) => {
    if (number === ".") {
      if (hasDecimal) return;
      setState({...state, hasDecimal: true});
    }
    if (number === "+/-") {
      setState(
        isNegative
          ? { ...state, currentNumber: currentNumber.slice(1) }
          : { ...state, currentNumber: `-${currentNumber}` }
      );
      setIsNegative(!isNegative);
    }
    else setState(
      currentNumber.length !== 12
        ? { ...state, currentNumber: `${currentNumber.toString()}${number}` }
        : { ...state }
    );
  };

  return (
    <div className="numbers">
      {numbers.map((number) => (
        <button value={number} key={number} onClick={() => handleClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}
