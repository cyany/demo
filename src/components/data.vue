<template>
    <div class="home">
      <h2>{{msg}}</h2>
      <div class="container">
        <div class="columns is-desktop">
          <div class="column" v-for="(data,index) in photos" :key="index">
              <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-bind:src="data.url" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img v-bind:src="data.thumbnailUrl" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{data.id}}</p>
        <p class="subtitle is-6">{{data.albumId}}</p>
      </div>
    </div>

    <div class="content">
      <p>{{data.title}}</p>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
import axios from '../../node_modules/axios'
export default {
  name: 'home',
  data () {
    return {
      msg: '利用Axios获取json数据',
      photos:[],
      err:[]
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/photos')
    .then(res=>{
    //console.log(res.data.slice(0,20));
    this.photos=res.data.slice(0,20);
    //console.log(this.photos)
    }).catch(e=>{this.err.push(e)});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1088px){
.columns.is-desktop {
  flex-wrap:wrap;
}
}
h2{
  text-align:center;
}
</style>
