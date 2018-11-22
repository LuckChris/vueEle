<template lang='pug'>
 .home-page-wrapper
    head-top(signin-up = 'home')
      span.head-logo(slot='logo' @click='realod') LuchChris
    .current-guass-city
      .guass-city-left
        p 当前定位城市：
      .guass-city-right
        p 定位不准时，请在城市列表中选择
    router-link.guass-city(to='')
      p 深圳
      svg.arrow-right
        use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right")
    .hot-city-wrapper
      .hot-city-title 热门城市
      .hot-city-content.clear
        ul(v-for='item in 8')
          router-link.city-item(tag="li" to ='') 上海
    .all-city-wrapper
      .city-order-number
        ul
          li.letter-classify(v-for='(item,index) in 6')
            h4 A
              span(v-if='index===0') (按字母排序)
            ul.city-content.clear
              router-link(tag='li' to ='' v-for='item in 12') 安徽
</template>
<script>
import headTop from '../../components/header'
export default {
  name: 'home',
  components: {
    headTop
  },
  data () {
    return {

    }
  },
  methods: {
    // 点击图标的时候刷新页面
    realod () {
      window.location.reload()
    }

  },
  created () {

  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
.home-page-wrapper{
  padding-top: 2rem;
   @include sc(0.55rem, #666);
}
.head-logo{
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem,#fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}
.current-guass-city{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  @include sc(0.55rem, #666);
}
.guass-city{
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.4rem;
  border-top: 1px solid $bc;
  border-bottom: 1px solid $bc;
}
.arrow-right{
  @include wh(.6rem, .6rem);
  fill: #999;
}
 .hot-city-wrapper{
   .hot-city-title{
    padding:  0.4rem;
    border-bottom: 1px solid $bc;
   }
   .hot-city-content{
     ul{
       .city-item{
         float: left;
          text-align: center;
          color: $blue;
          border-bottom: 0.025rem solid $bc;
          border-right: 0.025rem solid $bc;
          @include wh(25%, 1.75rem);
          @include font(0.6rem, 1.75rem);
       }
      .city-item:nth-type-of(4n){
        border-right: none;
      }
     }
   }
 }
  .all-city-wrapper{
    .letter-classify{
      margin-bottom: 0.4rem;
      background-color: #fff;
      border-bottom: 1px solid $bc;
      h4{
        border-bottom: 1px solid $bc;
        padding: 0.4rem;
      }
      .city-content{
        li{
          color: #666;
          float: left;
          text-align: center;
          border-bottom: 0.025rem solid $bc;
          border-right: 0.025rem solid $bc;
          @include wh(25%, 1.75rem);
          @include font(0.6rem, 1.75rem);
          }

      }

    }

  }

</style>
