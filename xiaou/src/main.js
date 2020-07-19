// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入rem.js
import './assets/js/remScale.js'
//引入清除默认样式
import './assets/css/reset.css'

//封装全局过滤器
//import toPrice from './filter/toPrice'
//Vue.filter('toPrice',toPrice)
import gFilter from './filter'
for(let i in gFilter){
  Vue.filter(i,gFilter[i])
}

//封装一个全局组件
import gCom from './common'
//对对象进行循环
for(let i in gCom){
  Vue.component(i,gCom[i])
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
