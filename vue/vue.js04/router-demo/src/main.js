// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//4.导入router
import zhangsan from './router' //如果是index可以不写,默认查找index

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    //5.将router添加到view实例中,建名必须小写
  router: zhangsan,
  template: '<App/>',
  components: { App }

})

