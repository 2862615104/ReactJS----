// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义元素
const arr = [10,20,30,40,50,60,70,80,90,100]

// 第1种写法
// const element = (
//   <ul>
//     <li>{arr[0]}</li>
//     <li>{arr[1]}</li>
//     <li>{arr[2]}</li>
//     <li>{arr[3]}</li>
//     <li>{arr[4]}</li>
//     <li>{arr[5]}</li>
//     <li>{arr[6]}</li>
//     <li>{arr[7]}</li>
//     <li>{arr[8]}</li>
//     <li>{arr[9]}</li>
//   </ul>
// )

// 第2种写法
// var newArr = []
// for(let i=0;i<arr.length;i++){
//   newArr.push(<li key={i}>{arr[i]}</li>)
// }
// const element = (
//   <ul>
//     {newArr}
//   </ul>
// )
// newArr["<li>10</li>", "<li>20</li>", "<li>30</li>"]

// 第3种写法  将来做项目的时候，一般是不会手写for循环的
// forEach filter  some  every  map
// map在这里是映射,是循环遍历数组中的每一项元素，获取之后进行处理再返回到新的数组当中
 let newArr = arr.map((item,index)=>{
    return <li key={index}>{item}</li>
 }) 
 const element = (
   <ul>
     {newArr}
   </ul>
 )
// 3.渲染页面
ReactDOM.render(
  element,
  document.getElementById('app')
  
)

// 定义组件  
// 一个是使用函数的方式来定义组件
// 使用类的方式来定义组件
function Hello(props){
  return <div>123456789{props.name}</div>
}

const ele = <Hello name="abc" age = "20"/>