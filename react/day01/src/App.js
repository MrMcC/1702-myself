import React from 'react'

// 引入header组件
import Header from './components/Header'
import LoginHeader from './components/LoginHeader'
import Footer from './components/Fotter'
import ComponentBody from './components/ComponentBody'

// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    // let loginBol = Math.random() > 0.5 ? true : false
    // let componentLogin = null
    // if (loginBol) {
    //   componentLogin = <Header/>
    // } else {
    //   componentLogin = <LoginHeader/>
    // }

    // var disabledBol = true
    // var arr = ['买菜', '打游戏', '学习react']
    
    return (
      <div>
        {Math.random()> 0.5? <Header/>: <LoginHeader/>}
        {/*<input type='button' disabled={disabledBol} value='按钮' />*/}
        {/*<ul>
          {arr.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>*/}
        <ComponentBody></ComponentBody>
        <Footer/>
      </div>
      )
  }
}