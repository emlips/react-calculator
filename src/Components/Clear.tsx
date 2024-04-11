import Props from "./props";

export default function Clear({setState}: Props) {
    const handleClick = () => {
      setState({total: 0, currentNumber: "", operator: "", hasDecimal: false})
    }
    return (
      <div className="clear">
        <button onClick={handleClick}>AC</button>
      </div>
    );
  }
  