// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

//2. 定义元素
const element = (
  <div>
    {
      /**
       * 1. 如果还是按原来的语法书写的话,当前的input标签就是一个只读的标签,是不能进行编辑
       * 2. 在onChange事件的时候,如果想要进行一个还的编辑的话,得使用属性defaultValue
       * 3. tabIndex可以用来设置表单的获取得焦点的顺序
       */
    }
    <input type="text" tabIndex="5" defaultValue="5"/> 
    <input type="text" tabIndex="3" defaultValue="3"/>
    <input type="text" tabIndex="4" defaultValue="4"/>
    <input type="text" tabIndex="2" defaultValue="2"/>
    <input type="text" tabIndex="1" defaultValue="1"/>
  </div>
)

// 3.渲染页面
ReactDOM.render(
  element,
  document.getElementById('app')
)

/**
 * ReactJS当中没有双向数据绑定
 * 不是因为技术达不到,是因为一开始的时候就没有封装类似的双向数组绑定
 * 要想实现双向数据绑定的效果，得自己封装  
 * value     onChange
 */