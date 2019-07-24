<template>
  <div class="shopCart">
    <cartTop>
      <div class="shopCartTop" slot="Top">
        <div class="content">购物车</div>
        <div class="delete">删除</div>
      </div>
    </cartTop>
    <div class="bbb"></div>
    <div class="leary">
      <div class="image">
        <img src="/static/images/kongche.png" alt="">
      </div>
      <div class="text">
        <div class="text1">购物车无商品</div>
        <div class="text2">"饿即是空，空即是饿"</div>
      </div>
    </div>
    <guess v-bind:goodS="goodS"></guess>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import Top from '@/components/Top'
import guess from '@/components/guess'
export default {
  data () {
    return {
      id:4,
      goodS:[
        {src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'14.9',oldPrice:'19.9'},
        {src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'14.9'},
        {src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'14.9',oldPrice:'19.9'},
        {src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'14.9',oldPrice:'19.9'},
        {src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'14.9'},
        {src:'/static/images/huolongguo.jpg',name:'树上熟红心火龙果 2个装',pro:'树上熟，红心，好吃，好吃，好吃，好吃，好吃',nowPrice:'14.9'}
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
    }
  }
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

</style>
