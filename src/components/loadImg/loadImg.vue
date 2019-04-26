<template lang='pug'>
.load-more-container
    .load-more-content(:style="{backgroundPositionY:-(positionY % 7)*2.5 + 'rem'}")
    svg.load_ellipse(xmlns="http://www.w3.org/2000/svg" version="1.1")
        ellipse(cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;")
</template>
<script>
export default {
    data() {
        return {
            positionY:0,
            timer:''
        }
    },
    mounted() {
        this.timer =  setInterval(() => {
            this.positionY ++
        },1000)        
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>
<style lang="scss">
@import '../../style/mixin';
.load-more-container{
    @include wh(2.5rem,2.5rem);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .load-more-content{
       @include wh(100%,100%);
       background: url(../../image/icon_loading.png) no-repeat 0 0;
       background-size: 2.5rem auto;
       transform: translateY(0px);
       animation: load .6s infinite ease-in-out;
       position: relative;
       z-index: 11;
    }
    @keyframes load {
        0%{
            transform: translateY(0px)
        }
        50%{
            transform: translateY(-50px)
        }
        100%{
            transform: translateY(0px)
        }      
    }
    .load_ellipse{
        position: absolute;
        @include wh(2.6rem,2rem);
        top: 2.2rem;
        left: 0.2rem;
        animation: ellipse .6s infinite ease-in-out;
        z-index: 10;
    }
    @keyframes ellipse {
        0%{transform: scale(1)}
        50%{transform: scale(0.3)}
        100%{transform: scale(1)}
        
    }
}
    
</style>