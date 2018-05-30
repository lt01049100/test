import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import routes from '@/router/routes.js'


Vue.use(Router)



const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            console.log('!token')
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router;