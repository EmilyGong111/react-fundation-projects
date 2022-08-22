import {useState} from "react"

const Counter = () => {
  const[counter, setCounter] = useState(0)
  return(
    <>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </>
  )
}
export default Counter