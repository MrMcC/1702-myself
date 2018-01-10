// 引入react
import React from 'react'
import ReactDOM from 'react-dom'


// 引入App组件
import App from '../../tab/src/App'

// 定义app组件渲染的位置，相当于入口
ReactDOM.render(
  <App/>,
  document.getElementById("app")
)