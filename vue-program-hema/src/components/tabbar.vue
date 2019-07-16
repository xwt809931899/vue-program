<template>
  <div class="tabbar">
    <Item :name='item.name' :path='item.path' v-for="(item,index) in items" :key="index" @change="getVal" :sel="selected">
        <img :src="item.img" alt="" slot="img">
        <img :src="item.imgBlue" alt="" slot="blueImg">
    </Item>
  </div>

</template>

<script>
import Item from '@/components/Item.vue'
export default {
  components:{
    Item
  },
  data () {
    return {
      selected:'',
      items:[
      {
        imgBlue:'../../static/images/hema1.png',
        img:'../../static/images/hema.png',
        name:'首页',
        path:''
      },
      {
        imgBlue:'../../static/images/sort1.png',
        img:'../../static/images/sort.png',
        name:'分类',
        path:'Sort'
      },
      {
        imgBlue:'../../static/images/life1.png',
        img:'../../static/images/life.png',
        name:'盒区生活',
        path:'Boxlife'
      },
      {
        imgBlue:'../../static/images/shopcar1.png',
        img:'../../static/images/shopcar.png',
        name:'购物车',
        path:'Shopcar'
      },
      {
        imgBlue:'../../static/images/mine1.png',
        img:'../../static/images/mine.png',
        name:'我的',
        path:'Mine'
      }
    ]
    }
  },
  methods:{
    getVal:function(res){
      this.selected = res;
    }
  }
}
</script>

<style lang='stylus' scoped>
.tabbar
  width 100%
  padding 10px 0
  box-sizing border-box
  display flex
  border-top 1px solid #f5f5f5
  position fixed
  bottom 0
  .one-tabbar
    flex 1
    text-align center
    position relative
    .image
      width 40px
      height 40px
      margin-bottom 10px
      position absolute
      left 50%
      transform translate(-50%,0)
      img
        width 40px
        height 40px
    .name
      box-sizing border-box
      padding-top 50px
      font-size 10px
        

        


</style>
