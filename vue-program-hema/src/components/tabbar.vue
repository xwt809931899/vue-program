<template>
  <div class="tabbar">
    <div class="one-tabbar" v-for="(item,index) in items" :key="index">
      <div class="image">
        <img :src="item.imgBlue" alt="" v-if="item.isClick">
        <img :src="item.img" alt="" v-else>
      </div>
      <div class="name">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
          items:[
      {
        imgBlue:'../../static/images/hema1.png',
        img:'../../static/images/hema.png',
        name:'首页',
        isClick:true
      },
      {
        imgBlue:'../../static/images/sort1.png',
        img:'../../static/images/sort.png',
        name:'分类',
        isClick:false
      },
      {
        imgBlue:'../../static/images/life1.png',
        img:'../../static/images/life.png',
        name:'盒区生活',
        isClick:false
      },
      {
        imgBlue:'../../static/images/shopcar1.png',
        img:'../../static/images/shopcar.png',
        name:'购物车',
        isClick:false
      },
      {
        imgBlue:'../../static/images/mine1.png',
        img:'../../static/images/mine.png',
        name:'我的',
        isClick:false
      }
    ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.tabbar
  width 100%
  .one-tabbar
    .image
      width 40px
      height 40px

</style>
