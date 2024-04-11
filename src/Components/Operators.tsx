interface OperatorsProps {
  state: {
    total: number;
    currentNumber: string;
    operator: string;
    hasDecimal: boolean;
  };
  setState: (arg0: any) => void;
}

export default function Operators({ state, setState }: OperatorsProps) {
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

  const handleClick = (newOperator: any) => {
    const { total, currentNumber, operator } = state;
    let newTotal = 0;
    operator !== ""
      ? (newTotal = operators[operator as keyof typeof operators].call(
          operator,
          +total,
          +currentNumber
        ))
      : (newTotal = +currentNumber);
    setState({
      total: newTotal,
      operator: newOperator,
      currentNumber: "",
      hasDecimal: false,
    });
  };

  return (
    <div className="operators">
      {Object.keys(operators).map((operation) => (
        <button
          value={operation}
          key={operation}
          onClick={() => handleClick(operation)}
        >
          {operation}
        </button>
      ))}
    </div>
  );
}
