<template lang='pug'>
#head_top
    slot(name='logo')
    slot(name='search')
    .head-goback(v-if='goBack', @click="$router.go(-1)")
      svg(width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1")
        polyline(points="12,18 4,9 12,0" style='fill:none;stroke:rgb(255,255,255);stroke-width:2')
    router-link(:to="userInfo? '/profile' : '/login'" v-if='signinUp' class='head-login')
      svg(class='user-avatar' v-if="userInfo")
        use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user")
      span.text-white(class='login-span' v-else) 登录|注册
    .title-head.ellipsis.text-center.text-white(v-if="headTitle")
      span.title-text.text-center.text-white.font-bold {{headTitle}}
    slot(name='edit')
    slot(name='msite-title')
    slot(name='changecity')
    slot(name='changeLogin')
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default{
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['userInfo'])

  },
  props: ['signinUp', 'headTitle', 'goBack'],
  methods: {
    reloadHandle () {
      window.location.reload()
    },
    ...mapMutations([
      'getUserInfo'
    ])
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/mixin';
  #head_top{
    background-color: $blue;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    @include wh(100%, 1.95rem);
  }
  .head-goback{
    left: 0.4rem;
    @include wh(0.6rem, 1rem);
    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .head-login{
    right: 0.55rem;
    @include sc(0.65rem, #fff);
    @include ct;
    .user-avatar{
      fill: #fff;
      @include wh(.8rem, .8rem);

    }
  }
  .title-head{
    @include center;
    width: 50%;
    .title-text{
      @include sc(0.8rem, #fff);
    }
  }

</style>
