<template>
  <div id="app">
  <router-view/>
  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0; 
}
</style>
