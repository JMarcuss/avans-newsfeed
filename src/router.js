import VueRouter from 'vue-router'
import NotFound from './components/NotFound'
import Home from './components/Home'
import News from './components/News'
import Login from './components/Login'


//Router configuration
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '*', component: NotFound },
      { path: '/login', name : "Login", component: Login, meta: {guest:true}},
      { path: '/', name : "Home", component: Home, meta: {requiresAuth:true}},
      { path: '/news', name : "News", component: News, meta: {requiresAuth:true}}
    ]
  })
  
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next()
    }
})

export default router
  