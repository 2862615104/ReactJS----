//1. 引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义组件
function Hello(props){
  // return <p>大家好,我叫{props.name},来自于{props.children},今年{props.age}岁了</p>
  return <p>大家好,我叫{props.obj.name},来自于{props.obj.address},今年{props.obj.age}岁了,{props.aa}</p>
}
// const aa = {
//   name:'张三',
//   age:20,
//   address:'香港特别行政区'
// }
//  下面的这个组件中的属性obj其实是函数Hello中的props属性值
// const element = <Hello obj={aa}/>
const name1 = "张三"
const element = <Hello obj={{ name: '张三', age: 20, address: '香港特别行政区'}} aa={name1}/>

// 3.渲染页面
ReactDOM.render(
  element,
  document.getElementById('app')
)