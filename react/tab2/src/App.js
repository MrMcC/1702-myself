import React from 'react'

import http from 'axios'
// http.get('http://h5.yztctech.net/api/axf/apihomehot.php')
//   .then(function (data) {
//     console.log(data.data)
//   })
// http.get('http://localhost:8081/products')
//   .then(function (data) {
//     console.log(data.data)
//   })
//引入react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Mine from './components/Mine/Mine'

// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/mine" component={Mine}/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/mine">Mine</Link>
            </li>
          </ul>
        </div>
      </Router>
      )
  }
}