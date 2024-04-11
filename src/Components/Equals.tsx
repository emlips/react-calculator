interface EqualsProps {
  state: {
    total: number;
    currentNumber: string;
    operator: string;
    hasDecimal: boolean;
  };
  setState: (arg0: any) => void;
}

export default function Equals({state, setState}: EqualsProps) {
  const operators = {
    "*": function (x: number, y: number) {
      return x * y;
    },
    "/": function (x: number, y: number) {
      return x / y;
    },
    "+": function (x: number, y: number) {
      return x + y;
    },
    "-": function (x: number, y: number) {
      return x - y;
    },
  };

  const handleClick = () => {
    const {total, currentNumber, operator} = state
    let finalTotal = 0
    operator !== "" ? finalTotal = operators[operator as keyof typeof operators].call(
      operator,
      +total,
      +currentNumber
    ) : finalTotal = +currentNumber
    setState({total: finalTotal, currentNumber: finalTotal.toString(), operator: "", hasDecimal: false})
  }

  return (
    <div className="equals">
      <button onClick={handleClick}>=</button>
    </div>
  );
}
