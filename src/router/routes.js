import login from '@/login'
import NotFound from '@/NotFound'
import HelloWorld from '@/views/HelloWorld'
import center from '@/views/center/index.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/404',
        component: NotFound,
        meta: {
            requireAuth: true,
        },
        name: '404',
        hidden: true
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            requireAuth: false,
        },
        component: login
    },
    {
        path: '/center',
        name: 'center',
        meta: {
            requireAuth: false,
        },
        component: center
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
  ];
export default routes;
