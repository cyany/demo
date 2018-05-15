<template>
    <div class="hello">
        <div class="left">
            <h1>{{title}}</h1>
            <form @submit.prevent="addLink">
                <input type="text" class="link-input" placeholder="添加想做的事情" v-model="newLink">
            </form>
            <ul>
              <li v-for="(link,index) in links" v-bind:key="index">
                  {{index}}---{{link}}
                  <button v-on:click="removeLink(index)" class="rm">Remove</button>
              </li>
            </ul>
        </div>
        <div class="right">
            <stats />
        </div>
    </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'hello',   
  components:{
      Stats
  },
  data:function(){
      return {
          newLink:''
      }
  },
  computed:{
      ...mapState([
        'title',
        'links'
      ])
  },
  methods:{
    ...mapMutations([
      'ADD_LINKS'
    ]
    ),
    ...mapActions([
      'removeLinks'
    ]),
    addLink:function(){
        this.ADD_LINKS(this.newLink)
        this.newLink='';
    },
    removeLink:function(link){
        this.removeLinks(link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

 input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }
    .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }
</style>

