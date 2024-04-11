import Props from "./props";

export default function Numbers({ setState, state }: Props) {
  const { currentNumber, hasDecimal, isNegative } = state;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+/-"];

  const buildNumber = (number: any) => {
    if (number === "." && hasDecimal) {
      return;
    }
    if (number === "+/-") {
      return setState(
        isNegative
          ? {
              ...state,
              currentNumber: currentNumber.slice(1),
              isNegative: !isNegative,
            }
          : {
              ...state,
              currentNumber: `-${currentNumber}`,
              isNegative: !isNegative,
            }
      );
    }
    setState(
      currentNumber.length !== 12
        ? number === "."
          ? {
              ...state,
              currentNumber: `${currentNumber.toString()}${number}`,
              hasDecimal: true,
            }
          : { ...state, currentNumber: `${currentNumber.toString()}${number}` }
        : { ...state }
    );
  };

  return (
    <div className="numbers">
      {numbers.map((number) => (
        <button value={number} key={number} onClick={() => buildNumber(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}
