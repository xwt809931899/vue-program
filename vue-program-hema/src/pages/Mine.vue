<template>
  <div class="mine">
    <mineTop>
      <div class="mineTop" slot="Top">
          <div class="top-icon set" >
            <img src="/static/images/set.png" alt="">
          </div>
          <div class="top-icon server">
              <img src="/static/images/rengong.png" alt="">
          </div>
      </div>
    </mineTop>
    <div class="bbb"></div>
    <div class="details">
      <div class="details-top">
        <div class="user">
          <div class="user-avatar">
            <img src="../../static/images/逆子.jpg" alt="">
          </div>
          <div class="name">
            <div class="user-name">最后再买一样东西</div>
            <div class="v-name">会员名：支付宝</div>
          </div>
        </div>
        <div class="scan">
          <div class="scan-code">
            <img src="../../static/images/saoma.png" alt="">
          </div>
          <div class="scan-mycode">
            <img src="../../static/images/erweima.png" alt="">
          </div>
        </div>
      </div>
      <div class="details-un">
        <div class="voucher" v-for="(item,index) in lists" :key="index">
          <div class="voucher-num">{{item.num}}</div>
          <div class="voucher-name">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="check">
        <div class="myOrder">
          我的订单
        </div>
        <div class="checkOrder">
          查看更多订单
        </div>
      </div>
      <div class="wait">
        <div class="options" v-for="(item,index) in groups" :key="index">
          <div class="image">
            <img :src="item.src" alt="">
          </div>
          <div class="name">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="hema">
      <div class="town">
        <div class="image1">
          <img src="../../static/images/town.png" alt="">
        </div>
        <div class="text1">
          <div class="name1">盒马小镇</div>
          <div class="name2">0元换好货</div>
        </div>
      </div>
      <div class="new">
        <div class="image2">
          <img src="../../static/images/xinren.png" alt="">
        </div>
        <div class="text2">
          <div class="name3">新人签到</div>
          <div class="name4">砸彩蛋 抽好券</div>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="content">
        <div class="text">常用工具</div>
      </div>
      <div class="columns">
        <div class="column" v-for="(item,index) in sorts" :key="index">
          <div class="image">
            <img :src="item.src" alt="">
          </div>
          <div class="text">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="ad">
      <img src="/static/images/ad.png" alt="">
    </div>
    <guess v-bind:goodS="goodS"></guess>
    <div class="under">已经到底了哦</div>
    <div class="aaa"></div>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import top from '@/components/top'
import guess from '@/components/guess'
export default {
  data () {
    return {
      id:5,
      lists:[
        {name:'优惠券/赠品券',num:'7'},
        {name:'我的账户',num:'0.00'},
        {name:'服务包/电子券',num:'0'}
      ],
      groups:[
        {src:'../../static/images/fukuan.png',value:'待付款'},
        {src:'../../static/images/peisong.png',value:'待配送'},
        {src:'../../static/images/shouhuo.png',value:'待收货'},
        {src:'../../static/images/pingjia.png',value:'待评价'}
      ],
      sorts:[
        {src:'../../static/images/huiyuan.png',name:'盒马X会员'},
        {src:'../../static/images/yaoqing.png',name:'邀请有礼'},
        {src:'../../static/images/mendian.png',name:'盒马门店'},
        {src:'../../static/images/xiaomi.png',name:'客服小蜜'},
        {src:'../../static/images/shoucang.png',name:'收藏'},
        {src:'../../static/images/piao.png',name:'开发票'},
        {src:'../../static/images/quan.png',name:'兑换优惠券'},
        {src:'../../static/images/lipinka.png',name:'盒马礼品卡'}
      ],
      goodS:[
        {src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒 经济实惠',nowPrice:'39.9',oldPrice:'59.9'},
        {src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒 经济实惠 经济实惠',nowPrice:'39.9'},
        {src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒',nowPrice:'39.9',oldPrice:'59.9'},
        {src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒',nowPrice:'39.9',oldPrice:'59.9'},
        {src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒',nowPrice:'39.9'},
        // {src:'/static/images/feiniu.jpg',name:'纽澜地 黑牛雪花牛肉卷',pro:'100g/3盒',nowPrice:'39.9'}
      ]
    } 
  },
  components:{
    'tabbar':tabbar,
    'mineTop':top,
    'guess':guess
  },
  methods:{
    switchTabbar5 (data) {
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


<style lang='stylus' scoped>
  .mine 
    background #ededed
    .mineTop
      .top-icon
        display inline-block
        position absolute
        top 50%
        transform translateY(-50%)
      .server
        right 0
        img
          height 50px
          width 50px
          padding 20px
      .set
        left 0
        img
          height 50px
          width 50px
          padding 20px
     
    .bbb
      height 120px
      width 100%
    .details
      height 220px
      // width 100vw 
      background #fff
      margin  30px 20px 20px 20px
      border-radius 10px
      border-bottom solid 10px #09bcff
      .details-top
        display inline-block
        width 100%
        .user
          display inline-block
          position relative
          .user-avatar
            display inline
            position absolute
            top -40px
            img
              padding 20px
              width 130px
              height 130px
              border-radius 50%
        .name
          display inline-block
          vertical-align top
          padding 20px
          padding-left 190px
          .user-name
            color #09bcff
            font-size 30px
            font-weight bold
            padding-bottom 10px
          .v-name
            color #8a8a8a
        .scan
          vertical-align top
          display inline-block
          float right
          padding-right 20px
          .scan-code
            display inline-block
            img
              height 50px
              width 50px
              padding 20px
          .scan-mycode
            display inline-block
            img
              height 50px
              width 50px
              padding 20px
      .details-un
        display flex
        .voucher
          flex 1
          text-align center
          padding 20px 20px 0 20px
          .voucher-num
            font-size 40px
            padding-bottom 5px
          .voucher-name
            font-size 25px
            color #8a8a8a
    .orders
      background #fff
      padding 20px
      margin-bottom 15px
      .check   
        padding-bottom 20px   
        border-bottom solid 1px #dbdbdb
        .myOrder
          display inline-block
          font-size 30px
          font-weight bold
        .checkOrder
          display inline-block
          float right
          color #8a8a8a
          padding-right 20px
          position relative
          line-height normal
        .checkOrder:before
          position absolute
          top 7px
          right 0
          content ''
          width 12px
          height 12px
          border-top 3px solid #8a8a8a
          border-right 3px solid #8a8a8a
          transform rotate(45deg)
      .wait
        padding-top 20px
        display flex
        .options
          flex 1
          position relative
          .image
            img 
              height 60px
              width 60px
              padding-bottom 10px
              position: relative;
              left: 33%;
          .name
            text-align center
            color #8a8a8a
    .hema
      background #fff
      padding-top 30px
      padding-bottom 30px
      display flex
      margin-bottom 15px
      .town
        flex 1
        border-right solid 2px #dbdbdb
        .image1
          display inline-block
          img 
            padding-left 30px
            padding-right 20px
            width 100px
            height 100px
        .text1
          display inline-block
          line-height normal
          padding-top 10px
          vertical-align top
          .name1
            font-size 30px
            padding-bottom 5px
          .name2
            font-size 20px
            color #8a8a8a
      .new
        flex 1
        .image2
          display inline-block
          img
            padding-left 30px
            padding-right 20px 
            width 100px
            height 100px
        .text2
          display inline-block
          line-height normal
          padding-top 10px
          vertical-align top
          .name3
            font-size 30px
            padding-bottom 5px
          .name4
            font-size 20px
            color #8a8a8a
    .tools
      background #fff
      margin-bottom 15px   
      .content
        padding 20px
        .text
          font-size 30px
          font-weight bold
          padding-bottom 20px
          border-bottom solid 1px #dbdbdb
      .columns
        padding 30px 20px 20px 20px
        .column
          display inline-block
          width 25%
          padding-bottom 30px
          .image
            img 
              width 60px
              height 60px
              padding-bottom 5px
              position relative
              left 60px
          .text
            text-align: center;
            color: #8a8a8a
    .ad
      padding 0 20px
      img 
        width 100%
        border-radius 10px
    .under
      color #8a8a8a
      font-size 30px
      text-align center
      padding 20px
    .aaa
      width 100%
      height 131px
</style>
