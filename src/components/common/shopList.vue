<template lang='pug'>
.shop-list-container
  router-link(:to='{path:"shop"}')
    .shop-list(v-for='(item,index) in shopList' :key='index')
      .shop-list-left
        img.shop-img(:src="imgBaseUrl + item.image_path")
        .shop-info
          .info-top
            .brand-name 品牌
            .shop-title {{item.name}}
          .info-middle
            rate-star
              .grade-num {{item.rating}}
            .month-count 月销{{item.recent_order_num}}单
          .info-bottom
            .price-enough ￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}
      .shop-list-right
        .tag-name
          span 保
          span 准
          span 票
        .deliver-type
          span {{item.delivery_mode.text}}
          span 准时达
        .distance-time
          span {{item.distance}} /
          span.time {{item.order_lead_time}}

</template>
<script>
import rateStar from './star'
import {shopList} from '@/service/getDate'
import {imgBaseUrl} from '@/config/env'
export default {
  components:{rateStar},
  data () {
    return {
      offset:'',
      shopList: [],
      imgBaseUrl  // 图片域名
    }
  },
  mounted() {
    this.initData()
  },
  methods:{
   async initData() {
      let res = await shopList(this.$store.state.currentAddress.latitude , this.$store.state.currentAddress.longitude, this.offset)
      this.shopList = res
    }
  }
}
</script>
<style lang="scss">
.shop-list-container{
  background-color: #fff;
  .shop-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem .6rem;
    border-bottom: .05rem solid #f1f1f1;
    .shop-list-left{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .shop-img{
        width: 3.6rem;
        height: 3.6rem;
      }
      .shop-info{
        color: #666;
        padding-left: .4rem;
        .info-top{
          color: #333;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .brand-name{
            font-size: .68rem;
            background-color: #ffdb26;
            border-radius: .15rem;
            text-align: center;
            font-size: 0.4rem;
            padding: 0.15rem;
            margin-right: .2rem;
          }
          .shop-title{
            width: 4.5rem;
            font-size: .7rem;
            font-weight: bold;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;

          }
        }
        .info-middle{
           font-size: .4rem;
           padding: .5rem 0;
           display: flex;
           justify-content: flex-start;
           align-items: center;
           .grade-num{

           }
        }
        .info-bottom{
          font-size: .36rem;
        }
      }
    }
    .shop-list-right{
      font-size: .46rem;
      text-align: right;
      .tag-name{
        color: #999;
       span{
          padding: 0.14rem;
          border: .04rem solid #f1f1f1;
          margin-left: .12rem;
       }
      }
      .deliver-type{
        padding: .6rem 0;
        span:first-child{
          background-color: #3690e1;
          color: #fff;
          padding: .04rem 0.1rem;
          border-radius: .2rem;
        }
        span:last-child{
          border: 0.04rem solid #3690e1;
          color: #3690e1;
          text-align: center;
          margin-left: .5rem;
          padding: .04rem 0.1rem;
          border-radius: .2rem;
        }
      }
      .distance-time{
        font-size: 0.4rem;
        color: #999;
        .time{
          color: #3690e1;
        }
      }

    }
  }
}
</style>
