import Props from "./props";

export default function Clear({setState}: Props) {
    const clearCalculator = () => {
      setState({total: 0, currentNumber: "", operator: "", hasDecimal: false})
    }
    return (
      <div className="clear">
        <button onClick={clearCalculator}>AC</button>
      </div>
    );
  }
  