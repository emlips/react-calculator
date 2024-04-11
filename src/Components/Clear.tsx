interface ClearProps {
  setState: (arg0: any) => void;
}

export default function Clear({setState}: ClearProps) {
    const handleClick = () => {
      setState({total: 0, currentNumber: "", operator: "", hasDecimal: false})
    }
    return (
      <div className="clear">
        <button onClick={handleClick}>AC</button>
      </div>
    );
  }
  