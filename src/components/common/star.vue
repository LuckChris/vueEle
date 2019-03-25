<template lang='pug'>
.rating-container
    section.star_container
        svg.grey_fill(v-for='num in 5')
            use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star")
    .star_overflow(:style="'width:' + 4.8*2/5 + 'rem'") 
        section.star_container
            svg.orange_fill(v-for='num in 5')
                use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star")   
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
.rating-container{
    position: relative;
    //  top: -.1rem;
     width: 2rem;
     height: .4rem;
    i{
        color: #ff9a0d;
    }
    .star_overflow {
        overflow: hidden;
        position: relative;
        height: 100%;
    }
    .star_container{
        position: absolute;
        display: flex;
        width: 2rem;
        height: 0.4rem;
        top: -0.02rem;
        left: -0.02rem;
    }
    .grey_fill{
        fill: #d1d1d1;
    }
    .orange_fill{
        fill: #ff9a0d;
    }
}
    
</style>