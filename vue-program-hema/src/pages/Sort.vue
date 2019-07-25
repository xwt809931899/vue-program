<template>
  <div class="sort">
    <lifeTop>
      <div class="sortTop" slot="Top">
        <div class="name">分类</div>
        <div class="image">
          <img src="/static/images/sousuo.png" alt="">
        </div>
      </div>
    </lifeTop>
    <div class="top"></div>
    <div class="content" v-for="(item,index) in items" :key="index">
      <img :src="item.src" alt=""/>
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import Top from '@/components/Top'
export default {
  data () {
    return {
      id:2,
      items:[
        {
          title:'时令水果',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'新鲜蔬菜',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'海鲜水产',
          src:'/static/images/shuiguo.jpg',
        }, {
          title:'肉禽蛋品',
          src:'/static/images/shuiguo.jpg',
        }, {
          title:'面点主食',
          src:'/static/images/shuiguo.jpg',
        },
        {
          title:'乳品烘培',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'餐饮小吃',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'熟食净菜',
          src:'/static/images/shuiguo.jpg',
        }, 
        {
          title:'粮油干货',
          src:'/static/images/shuiguo.jpg',
        },
        {
          title:'休闲零食',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'中外名酒',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'水饮冲调',
          src:'/static/images/shuiguo.jpg',
        }, {
          title:'美妆个护',
          src:'/static/images/shuiguo.jpg',
        },
         {
          title:'母婴保健',
          src:'/static/images/shuiguo.jpg',
        }, {
          title:'厨卫百货',
          src:'/static/images/shuiguo.jpg',
        }
      ]
    }
  },
  components:{
    'tabbar':tabbar,
    'lifeTop':Top
  },
  methods:{
    switchTabbar2 (data) {
      let item = data.find(item => item.id === this.id)
      if(item) {
        item.isClick = true
      }else {
        item.isClick = false
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
.sort
  .top  
    height 120px
  .sortTop
  .content
    display inline-block
    width 250px
    height 222px
    margin  36.8px 0px 36.8px 0px
    img
      margin 0px 10px 0px 40px
      height 118px
     
    .text 
        text-align center
        
    .name
      color #ffffff
      text-align center
      font-size 35px
      display inline-block
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    .image
      img
        width 50px
        height 50px
        padding-right 10px
        position absolute
        top 50%
        transform translateY(-50%)
        right 0
</style>
