// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义组件
// 下面的这种写法，直接渲染页面的时候，是没有问题的，但是一旦要是有数据值互相传递的话，就不太方便了，因此得使用组件来传值
// const element = (
//   <div>
//     <p></p>
//   </div>
// )
// 使用函数的方式来定义组件    就是和定义函数的方式是一样
function Demo(){
  return <p>这是最基本的使用函数的方式定义的组件123456</p>
}

// const element = <Demo/>
// // 3.渲染页面
// ReactDOM.render(
//   element,
//   document.getElementById('app')
// )

ReactDOM.render(
  <Demo />,
  document.getElementById('app')
)