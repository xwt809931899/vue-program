<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/28-autoplay.vue">
        <md-icon></md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><img src="http://img.aiimg.com/uploads/allimg/141113/1-141113213042.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://img.zcool.cn/community/01c69958c23baea801219c77f5fa9c.jpg@900w_1l_2o_100sh.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://img.zcool.cn/community/01aab65a29421fa80120ba3815b24a.jpg@2o.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://pic23.nipic.com/20120809/9820557_142641880000_2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://img.zcool.cn/community/01a79055b88c8b6ac7253f36ecd1f4.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          spaceBetween: 0,
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>

