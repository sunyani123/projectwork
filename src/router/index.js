import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import AdvertisingDesign from '@/views/AdvertisingDesign/AdvertisingDesign'
import DataCenter from '@/views/DataCenter/DataCenter'
import Login from '@/views/login/login'
import NewAdvertisement from '@/views/NewAdvertisement/NewAdvertisement'
import Changeplan from '@/views/Changeplan/Changeplan'
import store from '../store/store'
Vue.use(Router)
let router=new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AdvertisingDesign',
      name: 'AdvertisingDesign',
      component: AdvertisingDesign
    },
    {
      path: '/DataCenter',
      name: 'DataCenter',
      component: DataCenter
    },
    {
      path: '/NewAdvertisement',
      name: 'NewAdvertisement',
      component: NewAdvertisement,
      children:[
         {
          path: '/NewAdvertisement/Changeplan',
          name: 'Changeplan',
          component: Changeplan
         }
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{
  let isLogin=checkLoginStatus()
  if(to.name=='Login'){
    next()
  }else{
    if(!isLogin){
     next('/Login')
    }else{
      next()
    }
  }
})
function checkLoginStatus(){
  let tk=localStorage.getItem('token')
  if(tk){
    store.commit('saveUser',localStorage.getItem('username'))
  }
  return !!tk
}
export default router
