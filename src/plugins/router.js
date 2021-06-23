// Router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '../pages/index'


export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {title: 'Alter_ID | Your virtual clone assistant'}
        }
    ]
})