<template>
    <div class="one-middle-bar" :class="isSelected ? 'bgcolor' : ''" @click="bgcolor">
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
  props:{
    isSelected:{
      type:Boolean
    },
    id:{
      type:Number
    }
  },
  methods:{ 
    bgcolor () {
      this.$emit('bg',this.id)
      
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

