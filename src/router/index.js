import Vue from 'vue'
import Router from 'vue-router'
import data from '@/components/data'
import hello from '@/components/hello'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/data',
    	name:'data',
    	component:data
    },
    {
      path:'/hello',
      name:'HelloWorld',
      component:hello
    }
  ]
})
