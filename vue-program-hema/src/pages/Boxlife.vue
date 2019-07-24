<template>
  <div class="boxLife">
    <lifeTop>
      <div class="lifeTop" slot="Top">
        <div class="name">盒区生活</div>
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
      id:3
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
