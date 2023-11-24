import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  useEffect(()=>{
    const inputValue=localStorage.getItem("input")
    if(inputValue){
      setInputValue(inputValue)
    }
  })
  const changeHandle = (e) => {
    const value=e.target.value
    setInputValue(value);
    localStorage.setItem('input', value);
  };
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeHandle} />
      <div className="value">{inputValue}</div>
    </div>
  );
}10

export default App;
