<template lang='pug'>
.footer-guide-container
  router-link.footer-item(v-for='(item,index) in footerIconList' :key='index'
        :to='item.path' @click.native='tabItemHandler(item)')
      i.iconfont(:class='item.icon')
      span {{item.title}}

</template>
<script>
export default {
  data () {
    return {
      footerIconList: [
        { title: '外卖', icon: 'iconwaimai', path: '/msite' },
        { title: '搜索', icon: 'iconzhinanzhen', path: '/search' },
        { title: '订单', icon: 'iconemaxcitygerenxinxitubiaoji03', path: '/orderList' },
        { title: '我的', icon: 'iconuser', path: '/userCenter' }
      ],
      showItem: ''
    }
  },
  methods: {
    tabItemHandler (item) {
      this.showItem = item.title
      console.log(this.showItem)
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
  .footer-item{
    width: 25%;
    padding: .3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    span{
      font-size: 0.55rem;
    }
    i{
      font-size: .8rem;
    }
  }
  .router-link-active{
    color: $blue;
  }
}
</style>
