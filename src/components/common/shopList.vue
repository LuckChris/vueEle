<template lang='pug'>
.shop-list-container
  .shop-list(v-for='item in 5')
    .shop-list-left
      img.shop-img(src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3222698960,2408242127&fm=26&gp=0.jpg')
      .shop-info
        .info-top
          .brand-name 品牌
          .shop-title 效果演示
        .info-middle
          rate-star
            .grade-num 3.7
          .month-count 月销106单
        .info-bottom
          .price-enough ￥20起送/配送费约￥5    
    .shop-list-right
      .tag-name
        span 保
        span 准
        span 票
      .deliver-type
        span 蜂鸟专送
        span 准时达
      .distance-time
        span 112.5公里/
        span.time 1小时31分钟    

</template>
<script>
import rateStar from './star'
export default {
  components:{rateStar},
  data () {
    return {
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
    padding: .3rem 0;
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
            width: 1.7rem;
            font-size: .68rem;
            background-color: #ffdb26;
            border-radius: .15rem;
            text-align: center;
          }
          .shop-title{
            font-size: .8rem;
            font-weight: bold;
          }
        }
        .info-middle{
           font-size: .4rem;
           padding: .3rem 0;
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
      padding-right: 0.6rem;
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
        padding: .4rem 0;
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
