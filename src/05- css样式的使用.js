// 1.引包 
import React from 'react'
import ReactDOM from 'react-dom'

// jsx   js javascript    x  xml
import './index.css'
const box = {
  fontSize: "30px"
}
const box1 = {
  color:'hotpink'
}
// const box2 = {
//   fontSize : 26,
//   color: 'red'
// }
// 2.定义元素
const element = (   // 如果=后面没有标签的时候，一定要加一个()
  <div>
    <p style={box}>世间安得双全法</p>
    <p style={box1}>不用节食不长肉</p>
    <p style={{fontSize:26,color:'red'}}>不负如来不负卿</p>
    <div>
      <h2 className="box3">仓央嘉措</h2>
    </div>
  </div>
)
// 3.渲染页面
ReactDOM.render(
  element,
  document.getElementById('app')
)
/**
 * 1. 一个是内嵌的样式 
 * 
 * 
 * 2. 外链的样式 
 * 
 * 3. 行内的样式 
 * 
 * 
 */