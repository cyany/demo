<template>
       <div class="money">
       		<ul>
       			<li v-for="(data,index) in moneys">
       				{{index}}---{{data.USD}}
       			</li>
       		</ul>
       <div class="box">
       		<form @submit.prevent="addSkill">
       			<input type="text" v-model="skill" v-validate="'min:5'" name="skill">
       			{{skill}}
       			<input type="checkbox" id="checkbox" v-model="checked">

       			<transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
       			<p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
       			</transition>


       		</form>
       </div>
       </div>
      


</template>

<script>
import axios from 'axios'

export default{
	name:'money',
	data:()=>({
			skill:'',
			checked:true,
			moneys:[],
			e:[]
	}),
	created (){
		axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
		.then(mon=>{
			console.log(mon);
			this.moneys=mon.data;
		})
		.catch(e=>{
			this.e.push(e)
		})
	},
	methods:{
		 addSkill(){
          this.skill = '';
          console.log('The checkbox value is: '+this.checked)  // Add this
      }
	}
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }


 
</style>