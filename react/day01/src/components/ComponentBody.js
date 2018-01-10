import React from 'react'

export default class ComponentBody extends React.Component{
  constructor() {
    super()
    this.state = {
      username: "Miao",
      num: 0
    }
  }
  changeValue() {
    this.setState({
      username: "McC",
      num: ++this.state.num
    })
  }
  // render触发之前，更新
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // 只要state值被更改,render都会被重新调用
  render() {
    // 刚刷新页面时render执行一次
    console.log(this.state.num)
    // 将state更改,导致render再次被调用
    // requestAnimationFrame
    // setTimeout(() => {
    //   this.setState({
    //     num: ++this.state.num
    //   })
    // },1000)
    return (
      <main>
        <h1>我是主体内容</h1>
        <p>{this.state.username}</p>
        <p>{this.state.num}</p>
        <button onClick={this.changeValue.bind(this)}>点击切换userName</button>
      </main>
      )
  }
}