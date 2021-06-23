// Router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '../pages/index'
import Author from '../pages/author'



export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {title: 'The Buffed Bear! A strength gaining program'}
        },
        {
            path: '/author',
            name: 'Author',
            component: Author,
            meta: {title: 'About the author | The Buffed Bear!'}
        }
    ]
})