<template>
    <div class="video">
      {{apple}}
    <button v-on:click="add">+</button>
    <button @click="des">-</button>
    </div>
</template>

<script>
import axios from '../../node_modules/axios'
export default {
  name: 'video',
  props:['apple'],
  data () {
    return {
    }
  },
  methods:{
    add(){
      this.$emit('addOne');
    },
    des(){
      this.$emit('descOne');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
