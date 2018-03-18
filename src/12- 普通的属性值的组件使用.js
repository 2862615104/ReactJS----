//1. 引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义组件
function Hello(props){
  return <p>大家好,我叫{props.name},来自于{props.children},今年{props.age}岁了</p>
}

//  下面的这个组件中的属性其实都是函数Hello中的props属性值
const element = <Hello name="张三" age ={20}>广东省深圳市</Hello>


// 3.渲染页面
ReactDOM.render(
  element,
  document.getElementById('app')
)