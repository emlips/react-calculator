import Props from "./props";

export default function Operators({ state, setState }: Props) {
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

  const doCalculation = (newOperator: any) => {
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
          onClick={() => doCalculation(operation)}
        >
          {operation}
        </button>
      ))}
    </div>
  );
}
