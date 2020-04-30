<template lang='pug'>
.msite-content-wrapper
  head-top(signin-up ='msite')
    router-link.search-icon(to='/search/geohash' slot='search')
      i.iconfont.iconxiaoxi-.search-icon
    router-link.msite-title(to='/home' slot='msite-title')
      span.title-text.ellipsis {{choosePlaceName}}
  .food-types-list
    swiper(:options='swiperOption')
      swiper-slide(v-for='(item,index) in foodTypes' :key='index')
        .swiper-item-warpper
          .swiper-item(@click="swiperClick(foodItem)" v-for='(foodItem,index) in item' :key='index')
            img(:src='imgBaseUrl + foodItem.image_url')
            span {{foodItem.title}}
      .swiper-pagination(slot='pagination')
  .middle-line
  .store-list
    .store-title-wrapper
      i.iconfont.iconshangjia
      .store-title 附近商家
    shop-list(v-if='hasGetDate')
  footer-guide

</template>
<script>
import headTop from '@/components/header'
import { msiteAddress, msiteFoodTypes, guessCity } from '@/service/getDate'
import footerGuide from '@/components/footer/foodGuide.vue'
import shopList from '@/components/common/shopList'
export default {
  components: {headTop, footerGuide, shopList},
  data () {
    return {
      choosePlaceName: '请选择地址...', // 选择的地点名字
      geohash: '',
      foodTypes: [],
      imgBaseUrl: 'https://fuss10.elemecdn.com',
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        loop: true,
        pagination: { // 设置小圆点
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      },
      hasGetDate:false
    }
  },
  async beforeMount () {

    if(!this.$route.query.geohash) {
      const address = await guessCity()
      this.geohash = address.latitude + ',' + address.longitude
    } else {
      this.geohash = this.$route.query.geohash
    }
    this.$store.commit('saveGeohash', this.geohash)   // 记录经纬度

    let res = await msiteAddress(this.geohash)
    console.log(res)
    this.$store.commit('recordAddress', res)  // 记录当前的经纬度
    this.choosePlaceName = res.name
    this.hasGetDate = true
  },

  mounted () {
    msiteFoodTypes(this.geohash)
    .then(res=> {
      let resLength = res.length
      let resArr = [...res]
      let foodArr = []
      for (let i = 0, j = 0; i < resLength; i += 8, j++) {
        foodArr[j] = resArr.splice(0, 8)
      }
      this.foodTypes = foodArr
    })



  },
  methods: {
    // 解码url地址，
    getCategoryId (url) {

    },
    // swiper 点击
    swiperClick(item) {
      this.$router.push({
        path:'/food',
        query:{
          title:item.title,
          restaurant_category_id: this.getCategoryId(item.link)
        }
      })

     }
  }
}
</script>
<style lang='scss'>
@import "src/style/mixin";
.msite-content-wrapper {
  width: 100%;
  .search-icon {
    left: 0.3rem;
    font-size: 1.2rem;
    @include ct;
  }
  .msite-title {
    @include center;
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -0.5rem;
    .title-text {
      @include sc(0.8rem, #fff);
      text-align: center;
      display: block;
    }
  }
  .food-types-list {
    padding-top: 2.2rem;
    background-color: #fff;
    padding-bottom: 0.6rem;
    .swiper-item-warpper {
      padding: 0.3rem;
      padding-bottom: .8rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .item-link{
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
     .swiper-item{
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       }
      img {
        @include wh(1.8rem, 1.8rem);
        padding: .2rem;
      }
      span {
        display: inline-block;
        text-align: center;
        padding-top: .3rem;
        @include sc(0.55rem, #666);
      }
    }
   .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
     bottom:-6px;
   }
  }
  .middle-line {
    background-color: #f5f5f5;
    height: .64rem;
    border-top: 0.08rem solid #e4e4e4;
    border-bottom: 0.08rem solid #e4e4e4;
    box-sizing: border-box;
  }
  .store-list{
    background-color: #fff;
    .store-title-wrapper{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0.8rem;
      padding-top: .8rem;
      padding-bottom: 1rem;
    }
    .store-title{
      font-size: 0.72rem;
      padding-left: .4rem;
    }

  }
}
</style>
