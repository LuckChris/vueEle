<template lang='pug'>
 .home-page-wrapper
  head-top(signin-up = 'home')
    span.head_logo(slot='logo' @click='realod') LuchChris
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

.head_logo{
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem,#fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}

</style>
