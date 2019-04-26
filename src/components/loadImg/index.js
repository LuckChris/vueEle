

import Loading from './loadImg.vue'
let loading = {}
loading.install = function(Vue) {
    Vue.prototype.$loadingImg = {}
    Vue.prototype.$loadingImg.show =() => {
        if(document.querySelector('.load-more-container')) return
        let LoadingIMgConstructor = Vue.extend(Loading) // 构造器
        // 创建实例
        let  instance= new LoadingIMgConstructor()
        instance.$mount(document.querySelector('.load-more-container'))
        document.body.appendChild(instance.$el)
    }
    Vue.prototype.$loadingImg.hide =() =>{
        let ele = document.querySelector('.load-more-container')
        document.body.removeChild(ele)
    }
}
export default loading