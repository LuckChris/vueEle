<template lang='pug'>
.search-container 搜索页面的内容
  footerGuide
</template>
<script>
import footerGuide from '@/components/footer/foodGuide.vue'
export default {
	components: {footerGuide},
data () {
	return {}
  },

  mounted() {
  	 // console.log(this.$store.state.userInfo)
  }
}
</script>
<style lang="scss">
.search-container{
  width: 100%;
}
</style>
