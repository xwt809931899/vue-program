<template>
    <div class="top">
        <slot name="Top"></slot>
        <!-- <div class="top-icon set" >
            <img src="../../static/images/set.png" alt="">
          </div>
          <div class="top-icon server">
              <img src="../../static/images/rengong.png" alt="">
          </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.top
  width 100%
  height 120px
  position fixed
  top 0
  background linear-gradient(to right,#7ce2ff, #0ab0ff)
  z-index 100
</style>
