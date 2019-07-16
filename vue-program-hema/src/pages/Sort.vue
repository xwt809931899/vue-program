<template>
  <div>
    分类
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  data () {
    return {
      id:2
    }
  },
  components:{
    'tabbar':tabbar
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


<style scoped>

</style>
