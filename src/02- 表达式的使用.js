// 1. 引包 
import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
// 2.定义元素   
const age = 20
const sex = '男'
const name = "张三"

const ele = <div>大家好,我叫{name}，今年{age}岁了,是一个{sex}生</div>
// 3.页面渲染
ReactDom.render(
  // ele,
  // <p>添加了一个自己写的P标签fasdfasdfas{10+20}:{name}</p>,
  ele,
  document.getElementById('app')
)