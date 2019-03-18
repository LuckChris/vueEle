<template lang='pug'>
.msite-content-wrapper
  head-top(signin-up ='msite')
    router-link.search-icon(to='/search/geohash' slot='search')
      svg(width= '100%' height= '100%' xmlns="http://www.w3.org/2000/svg" version="1.1" )
        circle(cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none")
        line(x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255)stroke-width:2")
    router-link.msite-title(to='/home' slot='msite-title')
      span.title-text.ellipsis {{choosePlaceName}}
  .food-types-list
    swiper(:options='swiperOption')
      swiper-slide(v-for='(item,index) in foodTypes' :key='index')
        .swiper-item-warpper
          router-link.item-link(to="{path:'/food',query:{title:foodItem.title,restaurant_category_id:getCategoryId(foodItem.link)}}"  v-for='(foodItem,index) in item' :key='index')
            img(:src='imgBaseUrl + foodItem.image_url')
            span {{foodItem.title}}
      .swiper-pagination(slot='pagination')
  footer-guide

</template>
<script>
import headTop from '@/components/header'
import { msiteAddress, msiteFoodTypes } from '@/service/getDate'
import footerGuide from '@/components/footer/foodGuide.vue'
export default {
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
      }
    }
  },
  async beforeMount () {
    this.geohash = this.$route.query.geohash
    let res = await msiteAddress(this.geohash)
    this.choosePlaceName = res.name
  },
  components: { headTop, footerGuide },
  async mounted () {
    let res = await msiteFoodTypes(this.geohash)
    let resLength = res.length
    let resArr = [...res]
    let foodArr = []
    for (let i = 0, j = 0; i < resLength; i += 8, j++) {
      foodArr[j] = resArr.splice(0, 8)
    }
    this.foodTypes = foodArr
  },
  methods: {
    // 解码url地址，
    getCategoryId (url) {

    }
  }
}
</script>
<style lang='scss'>
@import "src/style/mixin";
.msite-content-wrapper {
  width: 100%;
  .search-icon {
    left: 0.8rem;
    @include wh(0.9rem, 0.9rem);
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
      // .swiper-item{
      //   // width: 25%;
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      //   align-items: center;
      // }
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
}
</style>
