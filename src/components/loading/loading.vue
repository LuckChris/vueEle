<template>
<div class='loading-container'>
    <div class='loading'></div>
</div>  
</template>
<script>
export default {
    name:'loading',
    data() {
        return {
            show : false
        }
    }
}
</script>
<style lang="scss">
.loading-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .loading{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 0.1rem solid #fff;
        border-right-color: #87CEEB;
        animation: loading 1s linear infinite;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
    
</style>