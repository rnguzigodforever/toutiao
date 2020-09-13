import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './styles/index.less'

// 加载vant组件库
import Vant from 'vant'
// import './styles/index.less'
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
