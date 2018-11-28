// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import global from '@/common/js/global'
import '@/common/scss/index.scss'

Vue.config.productionTip = false
Vue.use(global)
Vue.use(ElementUI)
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
