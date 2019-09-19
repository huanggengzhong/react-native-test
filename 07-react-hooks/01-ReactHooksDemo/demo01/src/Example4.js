//useContext
import React, { useState,createContext,useContext} from 'react'

const CountContext =createContext();

function Counter() {
  let count=useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

//上面的内容改为hooks写法
function Example4() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me
      </button>
      <CountContext.Provider value={count}>
      <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}
export default Example4
