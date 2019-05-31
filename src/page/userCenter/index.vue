<template lang='pug'>
.search-container {{msg}}
  footerGuide
</template>
<script>
import footerGuide from '@/components/footer/foodGuide.vue'

export default {
  data () {
    return {
      msg:'个人中心页面的内容'
    }
  },
  components: {footerGuide},
  mounted() {
    this.$loadingImg.show()
    setTimeout(() => {
    this.$loadingImg.hide()
      this.msg = '加载完辽'
    },5000)
  }
}


</script>
<style lang="scss">
.search-container{
  width: 100%;
}
</style>
