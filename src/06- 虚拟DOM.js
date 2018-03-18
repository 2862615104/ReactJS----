// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义元素
const element = <div className="box" data-id="1">广东省广州市天河区</div>

// 3.渲染页面
ReactDOM.render(
  element,
  document.getElementById('app')
)

// 相当于是在内存当中先生成一个虚拟DOM树,这个DOM树和浏览器中的DOM树是类似的

const aa = {
  type:'<div>',
  props:{
    className:'box',
    dataId:"1",
    children:'广东省广州市天河区'
  }
}