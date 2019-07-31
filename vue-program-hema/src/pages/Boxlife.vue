<template>
  <div class="boxLife">
    <lifeTop>
      <div class="lifeTop" slot="Top">
        <div class="name">盒区生活</div>
      </div>
    </lifeTop>
     <div class="top"></div>
     <div class="header">
       <div class="left">
         <div class="img">
         <img src="/static/images/hema1.png" alt="">
         </div>
         <div class="p">动态</div>
       </div>
       <div class='right'>
          <div class="img">
         <img src="/static/images/hema1.png" alt="">
         </div>
         <div class="p">互动</div>
       </div>
     </div>
     <div class="pl">
     <span>热门话题•<strong>HOT TOPIC</strong></span>
     </div>
     <div class="chat" v-for="(item,index) in items" :key="index">
        <div class="popular">
          <div class="img">
              <img :src=item.headerUrl alt=""> </div>
               <div class="title">{{item.title}}</div>
         
        </div>
        <div class="imgTitle">
          <img :src=item.titleUrl alt="">
        </div>
     </div>
     <div class="buttom">
           <div class="imgb">
             <img src="/static/images/buttom.png" alt="">
           </div>
           <div class="b">
           <div class="b1">Buttre Life Right Here</div>
           </div>
           <div class="b2">我可是有底线的哦</div>
        </div>
  </div>
   
</template>

<script>
import tabbar from '@/components/tabbar'
import Top from '@/components/Top'
export default {
 
  data () {
    return {
      id:3,
      items:[
        {
          headerUrl:'/static/images/title.png',
          title:"听说兰皇鸡蛋更适合做溏心蛋？",
          titleUrl:'/static/images/jidan.jpg' 
        },
         {
          headerUrl:'/static/images/title.png',
          title:"奶香沁人又清凉😙盒马X光明冰淇凌冰淇凌酸奶",
          titleUrl:'/static/images/bingqiling.jpg',
          
        },
          {
          headerUrl:'/static/images/title.png',
          title:"世纪难题,一天三问：今天吃什么？🍉",
          titleUrl:'/static/images/shiwu.jpg' 
        },
         {
          headerUrl:'/static/images/title.png',
          title:"盛夏不来一段甜甜的“枣恋”吗",
          titleUrl:'/static/images/zaozi.jpg',
          
        },
        {
          headerUrl:'/static/images/title.png',
          title:"芋见真心的你-敲可爱Q弹软糯的小圆子",
          titleUrl:'/static/images/yuyuan.jpg'
        },
        {
          headerUrl:'/static/images/title.png',
          title:"尝一颗阿克苏吊干杏干杏变小甜心",
          titleUrl:'/static/images/zao.jpg'
        }
      ]
    }
  },
  components:{
    'tabbar':tabbar,
    'lifeTop':Top
  },
  methods:{
    switchTabbar3 (data) {
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
.boxLife
  background-color #f5f5f5
  .buttom
    height 300px
    width 100%
    .imgb
      height 100px
      width 750px
      margin 0 auto
      img 
       width 100%
       height 100%
    .b
      padding 0 220px
      text-align center
      .b1
        margin-top 20px
        border-bottom  1px solid #999999
        padding-bottom  10px
    .b2
     color #999999
     text-align center
  .chat
    height 340px
    margin 20px 20px
    background-color #fff
    .imgTitle
      height 250px
      width 670px
      margin 7px 20px
      display flex
      justify-content  flex-start
      align-content center
      img
        height 100%
        width 100%
    .popular
      display flex
      justify-content  flex-start
      align-content center
      padding  20px 20px 5px 20px 
      .title
        display inline-block
        height 40px
        line-height 40px
      .img
        display inline-block
        height 40px
        width 40px
        img 
          height 100%
          width 100%
          border-radius 50%
  .top
    height 200px
  .pl 
    text-align  center
    padding  20px 20px
    strong 
     color blue
  .header
    display flex
    .right
      height 100px
      padding  20px 20px
      display flex
      flex 1
      justify-content center
      align-content center
      background-color #fff
      margin 15px 15px
      border-radius 15px
      .img
        padding  20px 5px 20px 20px 
        width 40px
        height 70px
        img 
          width 100%
          height 50%
      .p
        line-height 70px
        font-size 20px
    .left
      padding  20px 20px
      display flex
      flex 1
      justify-content center
      align-content center
      background-color #fff
      margin 15px 15px
      border 1px solid #f5f5f5
      border-radius 15px
      height 100px
      .img
        padding  20px 5px 20px 20px 
        width 40px
        height 80px
        img
          width 100%
          height 50%
      .p
        line-height 80px
        font-size 20px
  .lifeTop
    .name
      color #ffffff
      text-align center
      font-size 35px
      display inline-block
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    
</style>
