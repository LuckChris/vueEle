<template lang='pug'>
.header-wrapper
  .header-content
    .header-title.text-white.font-size-65(@click='reloadHandle') ele.me
    .header-right
      router-link(to='/login')
        p.text-white.font-size-65 登录|注册

</template>
<script>
export default{
  data () {
    return {

    }
  },
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
