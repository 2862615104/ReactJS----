// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义元素
// 写一个定时器来控制输出,如果当前的值是偶数的话，就用H2，如果是奇数的话，就是H6
let elememt = {}
let time = 100
setInterval(function(){
  time--
  if(time%2==0){
    elememt = <h2>{time}</h2>
  }else {
    elememt = <h6>{time}</h6> 
  }

// 3.渲染页面 
ReactDOM.render( 
  elememt,
  document.getElementById('app')
)

},500)
