// // 1.引包
import React from 'react'
import ReactDOM from 'react-dom'

// 2.定义组件
class Hello extends React.Component {  // component 组件
    constructor() {
        // 如果当前的类是继承来的,而且使用了constructor的话，第一行必须先调用 super()
        super()
        this.state = {
            msg: 'Hello World'
        }
    }
    render() {
        return (
            <div>
                <p>这是一个使用类的方式定义的组件{this.state.msg}</p>
                <p>大家好,我叫{this.props.name},今年{this.props.age}岁了</p>
            </div>
        )
    }
}

// 3.渲染页面
ReactDOM.render(
    <Hello name="张三" age={20} obj={{}} />,
    document.getElementById('box')
)
