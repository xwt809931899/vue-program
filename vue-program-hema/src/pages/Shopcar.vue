<template>
  <div class="shopCart">
    <cartTop>
      <div class="shopCartTop" slot="Top">
        <div class="content">购物车</div>
        <div class="delete" :class="count < 1 ? '':'has'">删除</div>
      </div>
    </cartTop>
    <div class="bbb"></div>
    <div class="leary" v-if="this.count < 1">
      <div class="image">
        <img src="/static/images/kongche.png" alt="">
      </div>
      <div class="text">
        <div class="text1">购物车无商品</div>
        <div class="text2">"饿即是空，空即是饿"</div>
      </div>
    </div>
    <div class="orderList" v-else>
      <div class="orders" v-for="(item,index) in goods" :key='index'>
        <div class="hook">
          <img v-if="select===true" src="/static/images/select.png" alt="">
          <img v-else src="/static/images/nselect.png" alt="">
        </div>
        <div class="orderImg">
          <img :src="item.src" alt="">
        </div>
        <div class="orderR">
          <div class="orderName">{{item.name}}</div>
          <div class="norm">规格：{{item.mount}}</div>
          <div class="price">{{item.nowPrice}}<span>/盒</span></div>
          <div class="quantity">
            <div class="less"  @click="lees1()">-</div>
            <div class="number">{{$store.state.num}}</div>
            <div class="add" @click="addNum">+</div>
          </div>
        </div>
      </div>
    </div>
    <guess v-bind:goodS="goodS"></guess>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import Top from '@/components/Top'
import guess from '@/components/guess'
import store from '@/vuex/store'
export default {
  data () {
    
    return {
      id: 4,
      count: 2,
      select: true,
      goodS:[
        {id:1,src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'12',oldPrice:'19.9'},
        {id:2,src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'3'},
        {id:3,src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'15',oldPrice:'19.9'},
        {id:4,src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'16',oldPrice:'19.9'},
        {id:5,src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'20'},
        {id:6,src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'10'}
      ],
      goods:[
        {id:1,num:1,src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒 经济实惠',nowPrice:'39.9',oldPrice:'59.9',mount:'300g/盒'},
        {id:2,num:1,src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒 经济实惠 经济实惠',nowPrice:'29.9',mount:'300g/盒'},
      ]
    }
  },
  components:{
    'tabbar':tabbar,  
    'cartTop':Top,
    'guess':guess
  },
  methods:{
    switchTabbar4 (data) {
      let item = data.find(item => item.id === this.id)
      if(item) {
        item.isClick = true
      }else {
        item.isClick = false
      }
    },
    add1(){
      store.state.num++
    },
    lees1(){
      if(store.state.num>1){
        store.state.num--
      }return
    },
    ...(store.mapActions)
  },
}
</script>

<style lang="stylus" scoped>

.shopCart
  .shopCartTop
    .content
      color #ffffff
      text-align center
      font-size 35px
      display inline-block
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    .delete
      font-size 30px
      line-height 120px
      color #fff
      opacity 0.4
      float right
      padding-right 10px
    .has
      opacity 1
  .bbb
    height 120px
    width 100%
  .leary
    height 300px
    width 100%
    position relative
    overflow hidden
    zoom 1
    .image
      padding 20px
      img
        position absolute
        width 150px
        height 150px
        left 50%
        transform translateX(-50%)
    .text
      position absolute
      bottom 10px
      left 50%
      transform translateX(-50%)
      .text1
        font-size 35px
        text-align center
        padding 10px 0
      .text2
        font-size 12px
        color #8a8a8a
        padding 5px 0
        text-align center
  .orderList
    background #fff8f3
    width 100%
    font-size 0
    .orders
      height 200px
      position relative
      display flex
      .hook
        display inline-block
        img
          position absolute
          width 60px
          height 60px
          padding-left 20px
          top 50%
          transform translateY(-50%)
      .orderImg
        display inline-block
        img 
          width 140px
          height 140px
          margin 30px 20px 20px 100px 
          border-radius 10px
          border 0
      .orderR
        display inline-block
        vertical-align top
        flex 1
        position relative
        .orderName
          font-size 27px
          padding 30px 0 60px 0
        .norm
          font-size 25px
          color #8a8a8a
          padding-bottom 20px
        .price
          font-size 30px
          color red
          span 
            color #8a8a8a
        .quantity
          font-size 0
          position absolute
          bottom 10px
          right 20px

          .add
            width 50px
            font-size 40px
            // background #ededed
            color #9f9f9f
            text-align center
            display inline-block
          .number
            font-size 30px
            height 40px
            line-height normal
            // background #ffffff
            text-align center
            display inline-block
            width 80px
          .less  
            // background #ededed
            font-size 40px
            color #09bcff
            text-align center
            display inline-block
            width 50px
</style>
