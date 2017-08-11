import Vue from 'vue'
import Router from 'vue-router'


const User = r => require.ensure([], () => r(require('@/pages/User.vue')), 'User')
const Men = r => require.ensure([], () => r(require('@/pages/Men.vue')), 'User')
const Avenuel = r => require.ensure([], () => r(require('@/pages/Avenuel.vue')), 'User')
const Underskirt = r => require.ensure([], () => r(require('@/pages/Underskirt.vue')), 'User')
const Women = r => require.ensure([], () => r(require('@/pages/Women.vue')), 'User')
const USApavilion = r => require.ensure([], () => r(require('@/pages/USApavilion.vue')), 'User')
const Login = r => require.ensure([], () => r(require('@/components/Login.vue')), 'Login')
const Register = r => require.ensure([], () => r(require('@/components/Register.vue')), 'Register')
const Details= r => require.ensure([], () => r(require('@/components/Details.vue')), 'Details')
const Cart= r => require.ensure([], () => r(require('@/components/Cart.vue')), 'Cart')

Vue.use(Router)

export default new Router({
  linkActiveClass:"hot-active",
  routes: [
   
    {
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/women',
      name: 'Women',
      component: Women
    },{
      path: '/avenuel',
      name: 'Avenuel',
      component: Avenuel
    },{
      path: '/usa',
      name: 'USApavilion',
      component: USApavilion
    },{
      path: '/men',
      name: 'Men',
      component: Men
    },{
      path: '/un',
      name: 'Underskirt',
      component: Underskirt
    },{
    	path:'/',
    	redirect:"/user"
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/details',
      name: 'Details',
      component: Details
    }
    ,{
      path: '/cart',
      name: 'Cart',
      component: Cart
    }

  ]
})
