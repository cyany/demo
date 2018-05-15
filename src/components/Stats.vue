<template>
  <div class="stats">
    <p>当前还有{{ countLinks }} 件事情</p>
    <button v-on:click="removeAllLinks">remove all links</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: 'stats',
  data:function(){
  		return {
  			msg:''
  		}
  },
  computed: {
    ...mapGetters([
      'countLinks'
    ]),
  },
  methods:{
  	...mapMutations(['REMOVE_ALL']),
  	...mapActions(['removeAll']),
  	removeAllLinks(){
  		this.removeAll().then(()=>{
  			this.msg="they have been removed!"
  		});
  	}
  }
}
</script>
<style scoped>
button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
</style>