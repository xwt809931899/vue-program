<template>
  <div class="Guess">
    <div class="guess">
      ——— 猜你喜欢<span>EXPLORE</span> ———
    </div>
    <div class="goods">
      <div
        class="good"
        :class="index % 2===0?'marginR':''"
        v-for="(item,index) in goodS"
        :key="index"
      >
        <div class="image">
          <img :src="item.src" alt />
        </div>
        <div class="text">
          <div class="name">{{item.name}}</div>
          <div class="pro">{{item.pro}}</div>
        </div>
        <div class="price">
          <div class="special" v-show="item.oldPrice">特价</div>
          <div class="nowPrice">
            ￥{{item.nowPrice}}
            <span>/袋&nbsp;</span>
          </div>
          <div class="oldPrice" v-show="item.oldPrice">￥{{item.oldPrice}}</div>
          <div class="cart">
            <img src="/static/images/cart.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodS:{
      type:Array,
      default:[]
      }
  },
  data() {
      return {
      }
    },
};
</script>

<style lang="stylus" scoped>
  .Guess
    background #ededed
    .guess
      padding 40px
      text-align center 
      font-size 30px
      span 
        color #09bcff
    .goods
      font-size 0
      .good
        display inline-block
        width 49.6666665%
        background #fff
        margin-bottom 5px
        border-radius 10px
        &.marginR
          margin-right 5px
        .image
          padding 20px
          img
            width 280px
            height 220px
        .text
          .name
            font-size 30px
            padding 15px 20px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .pro
            font-size 25px
            padding 0 40px 0 20px
            line-height normal
            color #8a8a8a
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        
        .price
          position relative
          padding 50px 10px 10px 10px
          line-height 50px
          .special
            position absolute
            top 20px
            left 20px
            color red
            font-size 12px
            display inline
            border solid 1px red
            line-height 1
          .nowPrice
            color red
            font-size 35px
            display inline-block
            span
              color #9f9f9f
              font-size 25px
          .oldPrice
            color #9f9f9f
            font-size 25px
            display inline-block
            text-decoration line-through
          .cart
            background #09bcff
            width 50px
            height 50px
            border-radius 50%
            float right
            img 
              width 50px
              height 50px

</style>
