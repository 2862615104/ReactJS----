// 1. 引包
import React from 'react'     //jsx语法 相关
import ReactDOM from 'react-dom'

// 2.定义元素
const  ele = <div>Hello World123abcdafeaa</div>    // 元素就相当于是已经封装过的标签

// 3.渲染页面
ReactDOM.render(
  ele,          // 需要渲染谁
  document.getElementById('app')  // 这个是到哪里去渲染
)