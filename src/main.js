import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false  

Vue.component(
  'popularity', () => import('./components/Popularity')
)

new Vue({
  render: h => h(App),
}).$mount('#app')



