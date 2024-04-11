import Props from "./props";

export default function Delete({state, setState}: Props) {

    const deleteDigit = () => {
        const {currentNumber} = state
        setState({...state, currentNumber: currentNumber.slice(0,-1)})
    }

  return (
    <div className="delete">
      <button onClick={deleteDigit}>CE</button>
    </div>
  );
}
