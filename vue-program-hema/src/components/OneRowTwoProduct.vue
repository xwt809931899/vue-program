<template>
  <div>
    <div class="container" v-if="items[0].isSelected">
      <div class="one-product" v-for="(product,index) in products1" :key="index">
      <div class="image">
        <img :src='product.image' />
      </div>
      <div class="desc">
        <div class="name"><span>{{product.name}}</span></div>
        <div class="infoAndTime">
          <div class="info"><span>{{product.info}}</span></div>
          <div class="time">{{product.time}}</div>
        </div>
      </div>
      <div class="priceAndUnitAndIcon">
        <div class="priceAndUnit">
          <div class="price">{{product.price}}</div>
          <div class="unit">{{product.unit}}</div>
        </div>
        <div class="icon">
          <img src='/static/images/shopcar3.png' />
        </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="items[1].isSelected">
      <div class="one-product" v-for="(product,index) in products2" :key="index">
      <div class="image">
        <img :src='product.image' />
      </div>
      <div class="desc">
        <div class="name"><span>{{product.name}}</span></div>
        <div class="infoAndTime">
          <div class="info"><span>{{product.info}}</span></div>
          <div class="time">{{product.time}}</div>
        </div>
      </div>
      <div class="priceAndUnitAndIcon">
        <div class="priceAndUnit">
          <div class="price">{{product.price}}</div>
          <div class="unit">{{product.unit}}</div>
        </div>
        <div class="icon">
          <img src='/static/images/shopcar3.png' />
        </div>
      </div>
      </div>
    </div>
    <div class="container" v-if="items[2].isSelected">
      <div class="one-product" v-for="(product,index) in products3" :key="index">
      <div class="image">
        <img :src='product.image' />
      </div>
      <div class="desc">
        <div class="name"><span>{{product.name}}</span></div>
        <div class="infoAndTime">
          <div class="info"><span>{{product.info}}</span></div>
          <div class="time">{{product.time}}</div>
        </div>
      </div>
      <div class="priceAndUnitAndIcon">
        <div class="priceAndUnit">
          <div class="price">{{product.price}}</div>
          <div class="unit">{{product.unit}}</div>
        </div>
        <div class="icon">
          <img src='/static/images/shopcar3.png' />
        </div>
      </div>
      </div>
    </div>
    <div class="container" v-if="items[3].isSelected">
      <div class="one-product" v-for="(product,index) in products4" :key="index">
      <div class="image">
        <img :src='product.image' />
      </div>
      <div class="desc">
        <div class="name"><span>{{product.name}}</span></div>
        <div class="infoAndTime">
          <div class="info"><span>{{product.info}}</span></div>
          <div class="time">{{product.time}}</div>
        </div>
      </div>
      <div class="priceAndUnitAndIcon">
        <div class="priceAndUnit">
          <div class="price">{{product.price}}</div>
          <div class="unit">{{product.unit}}</div>
        </div>
        <div class="icon">
          <img src='/static/images/shopcar3.png' />
        </div>
      </div>
      </div>
    </div>
    <div class="container" v-if="items[4].isSelected">
      <div class="one-product" v-for="(product,index) in products5" :key="index">
      <div class="image">
        <img :src='product.image' />
      </div>
      <div class="desc">
        <div class="name"><span>{{product.name}}</span></div>
        <div class="infoAndTime">
          <div class="info"><span>{{product.info}}</span></div>
          <div class="time">{{product.time}}</div>
        </div>
      </div>
      <div class="priceAndUnitAndIcon">
        <div class="priceAndUnit">
          <div class="price">{{product.price}}</div>
          <div class="unit">{{product.unit}}</div>
        </div>
        <div class="icon">
          <img src='/static/images/shopcar3.png' />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    items:{
      type:Array
    }
  },
  data () {
    return {
      id:1,
      products1:[
        {
          image:'https://img.allpyra.com/b8f89b92-5272-4fe9-83f2-b2f3d9606286.jpg',
          name:' ESTEE LAUDER雅诗兰黛 小棕瓶抗蓝光眼霜 15ml',
          info:'明星拥有的超级精品，你也值得拥有',
          time:'7.23送达',
          price:'￥359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/b8f89b92-5272-4fe9-83f2-b2f3d9606286.jpg',
          name:' ESTEE LAUDER雅诗兰黛 小棕瓶抗蓝光眼霜 15ml',
          info:'明星拥有的超级精品，你也值得拥有',
          time:'7.23送达',
          price:'￥359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/b8f89b92-5272-4fe9-83f2-b2f3d9606286.jpg',
          name:' ESTEE LAUDER雅诗兰黛 小棕瓶抗蓝光眼霜 15ml',
          info:'明星拥有的超级精品，你也值得拥有',
          time:'7.23送达',
          price:'￥359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/b8f89b92-5272-4fe9-83f2-b2f3d9606286.jpg',
          name:' ESTEE LAUDER雅诗兰黛 小棕瓶抗蓝光眼霜 15ml',
          info:'明星拥有的超级精品，你也值得拥有',
          time:'7.23送达',
          price:'￥359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/b8f89b92-5272-4fe9-83f2-b2f3d9606286.jpg',
          name:' ESTEE LAUDER雅诗兰黛 小棕瓶抗蓝光眼霜 15ml',
          info:'明星拥有的超级精品，你也值得拥有',
          time:'7.23送达',
          price:'￥359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/b8f89b92-5272-4fe9-83f2-b2f3d9606286.jpg',
          name:' ESTEE LAUDER雅诗兰黛 小棕瓶抗蓝光眼霜 15ml',
          info:'明星拥有的超级精品，你也值得拥有',
          time:'7.23送达',
          price:'￥359.00',
          unit:'/瓶'
        }
      ],
      products2:[
        {
          image:'https://img.allpyra.com/ecee4837-477d-4795-8266-71b3707655c1.jpg',
          name:' AVTAA LARDOR欧莱雅 小金瓶护肤精华 20ml',
          info:'小小一滴，浓缩就是精华',
          time:'7.24送达',
          price:'￥500.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/ecee4837-477d-4795-8266-71b3707655c1.jpg',
          name:' AVTAA LARDOR欧莱雅 小金瓶护肤精华 20ml',
          info:'小小一滴，浓缩就是精华',
          time:'7.24送达',
          price:'￥500.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/ecee4837-477d-4795-8266-71b3707655c1.jpg',
          name:' AVTAA LARDOR欧莱雅 小金瓶护肤精华 20ml',
          info:'小小一滴，浓缩就是精华',
          time:'7.24送达',
          price:'￥500.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/ecee4837-477d-4795-8266-71b3707655c1.jpg',
          name:' AVTAA LARDOR欧莱雅 小金瓶护肤精华 20ml',
          info:'小小一滴，浓缩就是精华',
          time:'7.24送达',
          price:'￥500.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/ecee4837-477d-4795-8266-71b3707655c1.jpg',
          name:' AVTAA LARDOR欧莱雅 小金瓶护肤精华 20ml',
          info:'小小一滴，浓缩就是精华',
          time:'7.24送达',
          price:'￥500.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/ecee4837-477d-4795-8266-71b3707655c1.jpg',
          name:' AVTAA LARDOR欧莱雅 小金瓶护肤精华 20ml',
          info:'小小一滴，浓缩就是精华',
          time:'7.24送达',
          price:'￥500.00',
          unit:'/瓶'
        },
      ],
      products3:[
        {
          image:'https://img.allpyra.com/51d9beba-dcf4-43d8-92af-ea0fb9dead00.jpg',
          name:' Super男款水壶 1L大容量 五颜六色',
          info:'超man水壶，是男人就买起来',
          time:'7.25送达',
          price:'￥159.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/51d9beba-dcf4-43d8-92af-ea0fb9dead00.jpg',
          name:' Super男款水壶 1L大容量 五颜六色',
          info:'超man水壶，是男人就买起来',
          time:'7.25送达',
          price:'￥159.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/51d9beba-dcf4-43d8-92af-ea0fb9dead00.jpg',
          name:' Super男款水壶 1L大容量 五颜六色',
          info:'超man水壶，是男人就买起来',
          time:'7.25送达',
          price:'￥159.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/51d9beba-dcf4-43d8-92af-ea0fb9dead00.jpg',
          name:' Super男款水壶 1L大容量 五颜六色',
          info:'超man水壶，是男人就买起来',
          time:'7.25送达',
          price:'￥159.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/51d9beba-dcf4-43d8-92af-ea0fb9dead00.jpg',
          name:' Super男款水壶 1L大容量 五颜六色',
          info:'超man水壶，是男人就买起来',
          time:'7.25送达',
          price:'￥159.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/51d9beba-dcf4-43d8-92af-ea0fb9dead00.jpg',
          name:' Super男款水壶 1L大容量 五颜六色',
          info:'超man水壶，是男人就买起来',
          time:'7.25送达',
          price:'￥159.00',
          unit:'/个'
        },
      ],
      products4:[
        {
          image:'https://img.allpyra.com/f12d5ccd-7310-49ad-af34-e09385be91fd.jpg',
          name:' SMACH LANKOU兰蔻 梦幻蓝瓶抗蓝光眼霜 15ml',
          info:'梦幻的蓝，让你置身幻梦之乡',
          time:'7.26送达',
          price:'￥1359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/f12d5ccd-7310-49ad-af34-e09385be91fd.jpg',
          name:' SMACH LANKOU兰蔻 梦幻蓝瓶抗蓝光眼霜 15ml',
          info:'梦幻的蓝，让你置身幻梦之乡',
          time:'7.26送达',
          price:'￥1359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/f12d5ccd-7310-49ad-af34-e09385be91fd.jpg',
          name:' SMACH LANKOU兰蔻 梦幻蓝瓶抗蓝光眼霜 15ml',
          info:'梦幻的蓝，让你置身幻梦之乡',
          time:'7.26送达',
          price:'￥1359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/f12d5ccd-7310-49ad-af34-e09385be91fd.jpg',
          name:' SMACH LANKOU兰蔻 梦幻蓝瓶抗蓝光眼霜 15ml',
          info:'梦幻的蓝，让你置身幻梦之乡',
          time:'7.26送达',
          price:'￥1359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/f12d5ccd-7310-49ad-af34-e09385be91fd.jpg',
          name:' SMACH LANKOU兰蔻 梦幻蓝瓶抗蓝光眼霜 15ml',
          info:'梦幻的蓝，让你置身幻梦之乡',
          time:'7.26送达',
          price:'￥1359.00',
          unit:'/瓶'
        },
        {
          image:'https://img.allpyra.com/f12d5ccd-7310-49ad-af34-e09385be91fd.jpg',
          name:' SMACH LANKOU兰蔻 梦幻蓝瓶抗蓝光眼霜 15ml',
          info:'梦幻的蓝，让你置身幻梦之乡',
          time:'7.26送达',
          price:'￥1359.00',
          unit:'/瓶'
        },
      ],
      products5:[
        {
          image:'https://img.allpyra.com/4a1f7437-4efc-4bd8-a389-445249bdff8d.jpg',
          name:' Baby可爱小水壶 带婴儿吸管 500ml',
          info:'可爱的小宝贝们都用这个',
          time:'7.27送达',
          price:'￥259.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/4a1f7437-4efc-4bd8-a389-445249bdff8d.jpg',
          name:' Baby可爱小水壶 带婴儿吸管 500ml',
          info:'可爱的小宝贝们都用这个',
          time:'7.27送达',
          price:'￥259.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/4a1f7437-4efc-4bd8-a389-445249bdff8d.jpg',
          name:' Baby可爱小水壶 带婴儿吸管 500ml',
          info:'可爱的小宝贝们都用这个',
          time:'7.27送达',
          price:'￥259.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/4a1f7437-4efc-4bd8-a389-445249bdff8d.jpg',
          name:' Baby可爱小水壶 带婴儿吸管 500ml',
          info:'可爱的小宝贝们都用这个',
          time:'7.27送达',
          price:'￥259.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/4a1f7437-4efc-4bd8-a389-445249bdff8d.jpg',
          name:' Baby可爱小水壶 带婴儿吸管 500ml',
          info:'可爱的小宝贝们都用这个',
          time:'7.27送达',
          price:'￥259.00',
          unit:'/个'
        },
        {
          image:'https://img.allpyra.com/4a1f7437-4efc-4bd8-a389-445249bdff8d.jpg',
          name:' Baby可爱小水壶 带婴儿吸管 500ml',
          info:'可爱的小宝贝们都用这个',
          time:'7.27送达',
          price:'￥259.00',
          unit:'/个'
        },
      ],

    }
  },
  computed:{
    // match() {
    //   let a = this.items.find(item => item.id === this.id)
    //   if(a.isSelected === true) {
    //     return true
    //   } else{
    //     return false
    //   }
      // for(let i = 0; i < this.items.length; i++) {
      //   if(this.items[i].id === this.id){
      //     return true
      //   }else{
      //     return false
      //   }
      // }
    // }
  },
}
</script>

<style lang="stylus" scoped>
.container
  padding 0 0 0 20px
  width 750px
  box-sizing border-box
  background #f5f5f5
  font-size 0
  .one-product
    width 345px
    margin-right 20px
    background #ffffff
    padding 10px
    box-sizing border-box
    display inline-block
    border-radius 10px
    margin-bottom 20px
    .image
      width 330px
      height 330px
      img
        width 330px
        height 330px
    .desc
      width 330px
      margin-bottom 10px
      .name
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 22px
        width 100%
        margin-bottom 8px
        span
          font-size 23px
      .infoAndTime
        width 100%
        display flex
        .info
          flex 1
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          font-size 21px
          color #cccccc
        .time
          font-size 15px
          border 1px solid #cccccc
          border-radius 4px
          color #cccccc
    .priceAndUnitAndIcon
      width 330px
      display flex
      .priceAndUnit
        flex 1
        .price
          font-size 23px
          color #fc5241
          display inline-block
          margin-right 15px
        .unit
          font-size 23px
          color #d7d7d7
          display inline-block
      .icon
        width 30px
        height 30px
        img   
          width 30px
          height 30px
          border-radius 50%
          background #08dbfd

</style>

