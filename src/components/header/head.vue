<template lang='pug'>
#head_top
    slot(name='logo')
    slot(name='search')
    .head-goback(v-if='goBack', @click="$router.go(-1)")
        svg(width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1")
            polyline(points="12,18 4,9 12,0" style='fill:none;stroke:rgb(255,255,255);stroke-width:2')
    router-link(:to="userInfo? '/profile' : '/login'" v-if='signinUP' class='head-login')
        svg(class='user-avatar' v-if="userInfo")
            use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user")
            span(class='login-span' v-else) 登录|注册
    .title-head.ellipsis(v-if="headTitle")
        span.title-text {{headTitle}}
    slot(name='edit')
    slot(name='msite-title')
    slot(name='changecity')
    slot(name='changeLogin')
</template>
<script>
import {mapState} from 'vuex'
export default{
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['userInfo'])

  },
  props: ['signinUp', 'headTitle', 'gaBack'],
  methods: {
    reloadHandle () {
      window.location.reload()
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/mixin';

  .header-wrapper{
    @include wh(100% ,1.95rem);
    background-color: $blue;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    line-height: 1.95rem;
    .header-content{
      padding: 0 .5rem;
      @include fj(space-between);
    }

  }

</style>
