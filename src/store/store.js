import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0
}
export default new Vuex.Store({
  state:{
  	title:'要做的事情',
  	links:[
  		'吃饭',
  		'睡觉',
  		'看书',
  		'敲代码',
  		'看天空',
  		'静思'
  	]
  },
  getters:{
  	countLinks:state => {
  		return state.links.length
  	}
  },
  mutations:{
  	ADD_LINKS:(state,link)=>{
  		state.links.push(link)
  	},
  	REMOVE_LINK:(state,link)=>{
  		state.links.splice(link,1)
  	},
  	REMOVE_ALL:(state)=>{
  		state.links=[]
  	}
  },
  actions:{
  	removeLinks:(context,link) =>{
  		context.commit("REMOVE_LINK",link)
  	},
  	removeAll ({commit}){
  		return new Promise((resolve,reject)=>{
  			setTimeout(() =>{
  				commit('REMOVE_ALL')
  				resolve()
  			},1500)
  		})
  	}
  }
})