import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@egjs/vue-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue-flicking/dist/flicking-inline.css";
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')