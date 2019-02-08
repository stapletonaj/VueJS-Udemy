import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import ServerList from './components/ServerList.vue'

Vue.component('header-component', Header);
Vue.component('server-list', ServerList);

new Vue({
  el: '#app',
  render: h => h(App),
})
