<template>
  <div id="app">
    <div class="tabs is-centered is-boxed">
      <ul v-on:click="menuChange">
        <li class="is-active">
          <router-link to="/data">
            Data
          </router-link>
        </li>
        <li>
          <router-link to="/hello">
            Hello
          </router-link>
        </li>
      </ul>
    </div>
  <transition name="router-anim" >
        <router-view></router-view>
    </transition>   
  </div>
</template>

<script>
import video1 from './components/video.vue'
export default {
  name: 'App',

  data:function(){
    return {
        isActive:false,
        abc:120
    }
  },
  methods:{
    menuChange: function(e){
        $(e.target.parentNode).addClass("is-active")
        .siblings().removeClass("is-active")
    }


  }
      
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'me'
 
.router-anim-enter-active 
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;

.router-anim-leave-active 
  animation: going 1s;


@keyframes going 
  from 
    transform: translateX(0);
  
  to 
    transform: translateX(-50px);
    opacity: 0;
  

@keyframes coming 
  from 
    transform: translateX(-50px);
    opacity: 0;
  
  to 
    transform: translateX(0);
    opacity: 1;
  
ul 
  list-style: circle
  padding-left: 40px

</style>
