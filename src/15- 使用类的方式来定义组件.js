// 1.引包
import React from 'react' 
import ReactDOM from 'react-dom' 

// 2.定义组件
class Hello extends React.Component {  // component 组件
  constructor() {
    // 如果当前的类是继承来的,而且使用了constructor的话，第一行必须先调用 super()
    super()
    this.state = {
      msg :'Hello World'
    }
  }
 
  render(){
    return <p>这是一个使用类的方式定义的组件{this.state.msg}</p>
  }
}

// 3.渲染页面
ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
)