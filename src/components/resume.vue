<template>
    <div class="resume">
      <h2>{{msg}}</h2>
      <div class="allWidth">
<div class="left-part">
<img v-bind:src="imgSrc" />
<div class="self-info">
<p><icon name="envelope" scale="2"></icon>Email:cyany_blue@163.com</p>
<p><icon name="phone" scale="2" spin></icon>Phone:18899736337</p>
<p><icon name="map-marker-alt" scale="2"></icon>Address:广州</p>
</div>
<div class="skills">
<h2>技能</h2>
<span>HTML5</span>
<span>CSS3</span>
<span>JS</span>
<span>SASS</span>
<span>AJAX</span>
<span>PHP,ThinkPHP</span>
<span>Angular 1.X</span>
<span>Vue</span>
<span>微信小程序</span>
</div>
<div class="language">
<h2>LANGUAGES</h2>
<h4>English</h4>
<p>大学英语四级</p>
</div>
</div>
<div class="right-part">
<div class="me">
<h1>姓名:陈彦有</h1>
<h3>Web 前端</h3>
<p>从事前端开发2年，有着丰厚的前端经验，开发过移动端，pc端前端</p>
</div>
<div class="expericence">
<h2>工作经历</h2>
<div class="ex" v-for="(item,index) in history" :key="index">
{{index+1}}---{{item.name}}  {{item.company}}  {{item.time}}
<ul>
<li v-for="(itemChild,indexChild) in item.events" :key="indexChild">{{itemChild}}</li>
</ul>
</div>


</div>
<div class="self-evaluation">
<h2>个人评价</h2>
<p>本人是计算机专业学生，熟悉计算机专业知识,
参与过几个网站项目的开发工作，能快速融入团队开发中,
自学能力和理解能力强，能够快速学习和掌握新技术,
踏实肯干，乐于分享与沟通，具备团队合作精神,
兴趣：看书，打篮球</p>
</div>
</div>
</div>
    </div>
</template>

<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from '../../node_modules/axios'
export default {
  msg: 'resume',
  components: {
    Icon
  },
  data () {
    return {
      msg: '我的简历',
      imgSrc:'../static/ime.jpg',
      history:[
        {name:'web前端',company:'广州品推科技有限公司',time:'2017/08-2018/05',events:['采用bootstrap,jquery,ajax,Art-template.js搭配wordpress进行网站开发，编写不同的主题模板以满足不同客户的网站建设需求','参与公司自己的微信小程序开发--品推科技','参与以VUE前端框架进行公司内部每日总结系统']},
        {name:'web前端',company:'广州中缆信息有限公司',time:'2017/04-2017/08',events:['负责对公司官网进行维护和修改','根据公司运营推广情况编写相应功能展示模块,主要利用bootstrap和jQuery对网站进行页面布局和操作，利用Ajax进行异步处理数据']},
        {name:'web前端',company:'广州龙骐贸易有限公司',time:'2016/08-2017/04',events:['http://www.segarty.com， http://www.segbeauty.com 该两个网站都是本人在实习期间在公司单独完成已上线的具体网站，都属于外贸商品网站，网站目前已正常运营','负责网站的web环境搭建配置2.负责安装magento框架3.根据美工设计图，完成切图，利用bootstrap和jQuery，ajax进行模块代码的编写4.对网站进行SEO 优化和维护']}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allWidth {
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  border: 1px solid #2ebcae;
  -webkit-display: flex;
  -moz-dispaly: flex;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  box-sizing: border-content; }

.left-part {
  width: 30%;
  padding: 15px; }
  .left-part img {
    width: 110px;
    height: auto;}

.right-part {
  width: 70%;
  padding: 15px; }

.skills {
  border-bottom: 1pxs spolid #2ebcae; }
  .skills span {
    display: inline-block;
    padding: 10px 15px;
    background-color: #2ebcae;
    margin:5px;
    color: #fff; }

.me {
  background-color: #2ebcae;
  color: #fff;
  padding: 15px; }
  .me h3 {
    color: #fff; }

h2 {
  border-bottom: 3px solid #2ebcae;
  color: #2ebcae;
  text-align:center;
      margin: 2rem 0; }
@media screen and (min-width: 1088px){
.columns.is-desktop {
  flex-wrap:wrap;
}
}
@media screen and (max-width:768px){
  .allWidth{
    flex-wrap:wrap;
  }
  .left-part,
  .right-part{
      width:100%;
  }
}
</style>
