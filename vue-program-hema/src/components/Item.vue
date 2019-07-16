<template>
  <div class="one-tabbar" @click="changePage">
    <div class="image" v-show="!bol">
      <slot name="img"></slot>
    </div>
    <div class="image" v-show="bol">
      <slot name="blueImg"></slot>
    </div>
    <div class='name' v-text="name"></div>
  </div>
</template>

<script>
export default {
  props:{
  name:{
  type:String
  },
  path:{
  type:String
  },
  sel:{
  type:String
  }
 },
  methods:{
    changePage () {
      this.$router.push('/' + this.path)
      this.$emit('change',this.path)
    }
  },
  computed:{
    bol: function(){
     if(this.sel === this.path){
      return true;
     }
     return false;
    }
  },
};
</script>

<style>
</style>
