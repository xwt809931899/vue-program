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
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import Top from '@/components/Top'
export default {
  data () {
    return {
      id:2
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
  .sortTop
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
