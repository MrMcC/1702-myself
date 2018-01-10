import React from 'react'

// 引入样式文件
import './Tab.less'
const styleComponentHeader = {
  header: {
    backgroundColor:'#333',
    color: '#fff',
    paddingTop:'15px',
    paddingBottom:'15px'
  }
}
export default class Tab extends React.Component{
  constructor () {
    super()
    this.state = {
      activeIndex: 0
    }
  }
  changeIndex (index) {
    this.setState({
      activeIndex: index
    })
  }
  render () {
    let activeIndex = this.state.activeIndex
    return (
        <div class='tab' style={styleComponentHeader.header}> {/*className='tab' 不安插件只能这么写*/}
          {this.props.tab.map((item, index) => {
            return <button key={item.btn} className={activeIndex===index? 'active': ''} onClick={this.changeIndex.bind(this, index)}>{item.btn}</button>
          })}
          {this.props.tab.map((item, index) => {
            return <div key={item.content} className={activeIndex===index? 'active': ''}>{item.content}</div>
          })}
        </div>
      )
  }
}