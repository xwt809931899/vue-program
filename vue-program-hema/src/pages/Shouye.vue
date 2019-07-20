<template>
  <div class="container">
    <div class="header">
      <div class="header-top">
      <div class="location">
        <img src="/static/images/location.png" alt="" />
      </div>
      <div class="input">
        <!-- <img src='/static/images/slice.png' alt="" /> -->
        <input type="text" placeholder="大米" v-model="content"/>
      </div>
      <div class="scan">
        <img src="/static/images/scan.png" alt="" />
      </div>
      <div class="message">
        <img src="/static/images/message.png" alt="">
      </div>
      </div>
      <div class="header-bottom">
        <div class="text1">
          <img src="/static/images/true.png" alt="">
          <span>品质臻选</span>
        </div>
        <div class="text2">
          <img src="/static/images/true.png" alt="">
          <span>重货包邮</span>
        </div>
        <div class="text3">
          <img src="/static/images/true.png" alt="">
          <span>次日送达</span>
        </div>
        <div class="text4">
          <img src="/static/images/hemalogo.png" alt="">
        </div>
      </div>
    </div>
    <DynamicImage></DynamicImage>
    <div class="icons">
      <div class="icon" v-for="(icon,index) in icons" :key="index">
        <div class="image">
          <img :src="icon.image" alt="">
        </div>
        <div class="text">{{icon.title}}</div>
      </div>
    </div>
    <div class="active">
      <div class="active-content">
        <div class="active-desc" v-for="(good,index) in goods" :key="index">
          <div class="titleAndTime">
            <div class="title" :class="good.title === 'Cosme精选' ? 'black' : ''">{{good.title}}</div>
            <div class="time" v-if="good.time">
              <div class="hour">{{good.hour}}</div>
              <div class="symbol">:</div>
              <div class="minute">{{good.minute}}</div>
              <div class="symbol">:</div>
              <div class="second">{{good.second}}</div>
            </div>
          </div>
          <div class="info">{{good.info}}</div>
          <div class="images">
            <div class="image1">
              <img :src="good.image1" alt="">
            </div>
            <div class="image2">
              <img :src="good.image2" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicImage from '@/components/DynamicImage'
export default {
  data () {
    return {
      icons:[
        {
          image:'/static/images/snack.png',
          title:'休闲零食'
        },
        {
          image:'/static/images/drink.png',
          title:'中外名酒'
        },
        {
          image:'/static/images/water.png',
          title:'饮料/水'
        },
        {
          image:'/static/images/milk.png',
          title:'乳品冲饮'
        },
        {
          image:'/static/images/oil.png',
          title:'粮油调味'
        },
        {
          image:'/static/images/beauty.png',
          title:'美妆个护'
        },
        {
          image:'/static/images/mother.png',
          title:'母婴保健'
        },
        {
          image:'/static/images/clear.png',
          title:'厨卫清洁'
        },
        {
          image:'/static/images/good.png',
          title:'日用百货'
        },
        {
          image:'/static/images/half.png',
          title:'周末半价'
        }
      ],
      goods:[
        {
          title:'超盒算',
          hour:'11',
          minute:'11',
          second:'11',
          info:'特价疯抢24H 买一送一起',
          image1:'/static/images/water.png',
          image2:'/static/images/milk.png',
          time:true
        },
        {
          title:'耍大牌',
          hour:'11',
          minute:'11',
          second:'11',
          info:'大牌买一送一',
          image1:'/static/images/water.png',
          image2:'/static/images/milk.png',
          time:false

        },
        {
          title:'追洋货',
          hour:'11',
          minute:'11',
          second:'11',
          info:'进口好货5折',
          image1:'/static/images/water.png',
          image2:'/static/images/milk.png',
          time:false
        },
        {
          title:'Cosme精选',
          hour:'11',
          minute:'11',
          second:'11',
          info:'口碑美妆风向标',
          image1:'/static/images/water.png',
          image2:'/static/images/milk.png',
          time:false
        },

      ]
    }
  },
  components:{
    DynamicImage
  },
  methods:{
  }
}
</script>


<style lang='stylus' scoped>
.container
  width 750px
  .header
    width 750px
    height 200px
    background rgba(255,255,255,1)
    padding 40px 10px 10px 20px
    box-sizing border-box
    background #08dbfd
    display flex
    flex-direction column
    position fixed
    top 0
    z-index 99
    .header-top
      height 100px
      display flex
      align-items center
      margin-bottom 2px
      .location
        width 40px
        height 40px
        margin-right 20px
        display inline-block
        img 
          width 40px
          height 40px
      .input
        width 500px
        height 50px
        margin-right 30px
        display inline-block
        background rgba(255,255,255,1)
        border-radius 34px
        padding-left 80px
        box-sizing border-box
        // display flex
        // align-items center
        // position relative
        // img
        //   width 40px
        //   height 40px
        //   position absolute
        //   left 4%
        //   top 24%
        input
          width 100%
          height 100%
          background rgba(255,255,255,1)
          font-size 28px
          // line-height 40px
          // margin-left 52px
          border-radius 34px
          border 0
      .scan
        width 40px
        height 40px
        margin-right 30px
        display inline-block
        img
          width 40px
          height 40px
      .message
        width 40px
        height 40px
        margin-right 10px
        display inline-block
        img
          width 40px
          height 40px
    .header-bottom
      flex 1
      .text1
        display inline-flex
        margin-right 15px
        img
          width 35px
          height 35px
          display inline-block
          margin-right 4px
        span  
          font-size 25px
          color #ffffff
      .text2
        display inline-flex
        margin-right 15px
        img
          width 35px
          height 35px
          display inline-block
          margin-right 4px
        span  
          font-size 25px
          color #ffffff
      .text3
        display inline-flex
        margin-right 140px
        img
          width 35px
          height 35px
          display inline-block
          margin-right 4px
        span  
          font-size 25px
          color #ffffff
      .text4
        display inline-flex
        img
          width 100px
          height 50px
  .icons
    width 100%
    box-sizing border-box
    padding 0 0 35px 25px
    background #f5f5f5
    .icon
      width 120px
      height 150px
      margin-right 25px
      display inline-block
      text-align center
      position relative
      .image
        width 70px
        height 70px
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        img 
          width 70px
          height 70px
          border-radius 50%
      .text
        font-size 20px
        padding-top 125px
  .active
    width 100%
    padding:0 20px 20px 20px
    box-sizing border-box
    background #f7fafa
    .active-content
      background #ffffff
      padding 20px
      box-sizing border-box
      width 710px
      border-radius 10px
      .active-desc
        width 330px
        font-size 0
        display inline-block
        .titleAndTime
          .title
            font-size 22px
            font-weight bold
            display inline-block
            color #fc5241
            margin-right 15px
          .black
            color #000000
          .time
            display inline-block
            margin-bottom 2px
            .hour
              font-size 22px
              background #fc5241
              color #ffffff
              display inline-block
              border-radius 4px
            .symbol
              font-size 20px
              display inline-block
              color #fc5241
              margin-right 1px
            .minute
              font-size 22px
              background #fc5241
              color #ffffff
              display inline-block
              border-radius 4px
            .second
              font-size 22px
              background #fc5241
              color #ffffff
              display inline-block
              border-radius 4px
        .info
          color #ccc
          font-size 20px
          margin-bottom 20px
        .images
          width 100%
          display flex
          box-sizing border-box
          padding 0 20px 20px 0
          .image1
            flex 1
            height 125px
            img
              height 125px
              width 100%
          .image2
            flex 1
            height 125px
            img
              height 125px
              width 100%
</style>
