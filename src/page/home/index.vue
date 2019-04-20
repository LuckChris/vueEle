<template lang='pug'>
 .home-page-wrapper
    head-top(signin-up = 'home')
      span.head-logo(slot='logo' @click='realod') LuchChris
    .current-guass-city
      .guass-city-left
        p 当前定位城市：
      .guass-city-right
        p 定位不准时，请在城市列表中选择
    router-link.guass-city(:to="'/city/' + guessCityid")
      p {{guessCity}}
      svg.arrow-right
        use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right")
    .hot-city-wrapper
      .hot-city-title 热门城市
      .hot-city-content.clear
        ul(v-for='item in hotCity')
          router-link.city-item(tag="li" :to ="'/city/' + item.id" :key='item.id') {{item.name}}
    .all-city-wrapper
      .city-order-number
        ul
          li.letter-classify(v-for='(item,key,index) in sortCityGroup')
            h4 {{key}}
              span(v-if='index===0') (按字母排序)
            ul.city-content.clear
              router-link.ellipsis(tag='li'  v-for='i in item' :to ="'/city/' + i.id" :key='item.id') {{i.name}}       
</template>
<script>
import headTop from '@/components/header'
import {guessCity, hotCity, groupCity} from '@/service/getDate'
export default {
  name: 'home',
  components: {
    headTop
  },
  data () {
    return {
      guessCity: '', // 默认当前城市
      guessCityid: '', // 当前城市id
      hotCity: [], // 热门城市
      groupCity: {}// 所有城市

    }
  },
  methods: {
    // 点击图标的时候刷新页面
    realod () {
      window.location.reload()
    }
  },
  mounted () {
    guessCity().then(res => {
      this.guessCity = res.name
      this.guessCityid = res.id
    })
    hotCity().then(res => {
      this.hotCity = res
    })
    groupCity().then(res => {
      this.groupCity = res
    })
  },
  computed: {
    sortCityGroup () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        // String.formCharCode() 可接受一个指定的unicode值，然后返回一个字符串
        // 例如  String.formCharCode(65) 输出的值是 A
        if (this.groupCity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)]
        }
      }
      return sortobj
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
