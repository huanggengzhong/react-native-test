import React,{ useState } from 'react';

function Example2() {
const [age,setAge]=useState(18)
const [sex,setSex]=useState('男')
const [work,setWork] =useState('web程序员')
return (
  <div>
    <p> 我今年{age}岁</p>
    <p> 性别是:{sex}</p>
    <p> 职业是{work}</p>
  </div>
)
}
export default Example2;

//useEffect()方法