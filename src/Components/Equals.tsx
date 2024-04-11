import Props from "./props";

export default function Equals({state, setState}: Props) {
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

  const calculateEquals = () => {
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
      <button onClick={calculateEquals}>=</button>
    </div>
  );
}
