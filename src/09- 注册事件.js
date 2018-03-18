// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义元素
// const ele = <button onClick={alert(123)}>按钮</button>
// const ele = <button onClick={function () { alert(789)}}>按钮</button>
const ele = <button onClick={ ()=> { alert(789)}}>按钮</button>
{/* <div id="app" onclick="alert(123)"></div> */}

// 3.渲染元素
ReactDOM.render(
  ele,
  document.getElementById('app')
)
/**
 * 注册事件的方式和原来的JS的方式几乎是一样的
 *  
 * 1. 内嵌式的注册事件
 * 2. 行内的方式来注册事件
 *     注意：
 *        1. 由原来的onclick改成onClick驼峰式的写法 
 *        2. 由原来的" 改成 {},  {}里面要放表达式，表达式其实就是要执行的代码
 *        3. 在{}里面如果直接写alert,会自动的立即执行
 *        4. 如果想让按钮在被单击的时候才执行事件的话,得在里面写一个函数
 */

//  window.onload = function(){
//    // 当页面中所有的资源都加载完毕之后再来执行函数里面的代码
//    const btn = document.querySelector('button')
//    btn.onclick = function(){
//      alert('内嵌的方式注册了一个事件...')
//    }
//  }