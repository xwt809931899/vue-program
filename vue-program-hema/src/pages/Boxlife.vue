<template>
  <div>
    盒区生活
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  data () {
    return {
      id:3
    }
  },
  components:{
    'tabbar':tabbar
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


<style scoped>

</style>
