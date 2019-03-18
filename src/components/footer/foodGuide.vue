<template lang='pug'>
.footer-guide-container
  .footer-item(v-for='(item,index) in footerIconList')
    i.iconfont(:class='item.icon')
    span {{item.title}}

</template>
<script>
export default {
  data () {
    return {
      footerIconList: [
        { title: '外卖', icon: 'iconwaimai' },
        { title: '搜索', icon: 'iconzhinanzhen' },
        { title: '订单', icon: 'iconemaxcitygerenxinxitubiaoji03' },
        { title: '我的', icon: 'iconuser' }
      ]
    }
  }
}
</script>
<style lang='scss'>
@import "src/style/mixin";
.footer-guide-container{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .3rem 0;
  .footer-item{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      @include sc(0.55rem, #666);
    }
    i{
      font-size: .8rem;
    }
  }
}
</style>
