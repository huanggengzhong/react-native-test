//useContext
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(()=>{
    console.log(`useEffect=>老弟,你来了! Index页面`);
    return ()=>{
      console.log(`老弟你走了!index页面`);
      
    }
  },[])//实现了离开的生命周期函数
  return <h2>JSPANG.COM</h2>
}
function List() {
  console.log(`useEffect=>老弟,你来了! List页面`);
  return <h2>List Page</h2>
}

//上面的内容改为hooks写法
function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect=>you click ${count} times`)
    return ()=>{
      console.log('=======================');
      
    }
  },[count])
  return (
    <div>
      <p>You click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表页</Link>
          </li>
        </ul>
        <Route exact path="/" component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}
export default Example
