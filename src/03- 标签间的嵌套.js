//1. 引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义元素
const element =(   // 如果=后面没有标签的时候，一定要加一个()
  <div>
    <p>世间安得双全法</p>
    <p>不用节食不长肉</p>
    <p>不负如来不负卿</p>
    <div>
      <h2>仓央嘉措</h2>
    </div>
  </div>
) 

// 3.页面的渲染
ReactDOM.render(
  element,
  document.getElementById('app')
)