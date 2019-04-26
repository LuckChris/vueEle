
import LoadingComponent from './loading.vue'
let Loading = {}
Loading.install = function (Vue) { // 开发loading插件
    Vue.prototype.$loading = {}
    Vue.prototype.$loading.show = () =>{ // loading展示
        if(document.querySelector('.loading-container')) return // 已经存在不加载
        let LoadingConstructor = Vue.extend(LoadingComponent) // 创建一个loading构造器
        let instance = new LoadingConstructor() // 创建实例
        instance.$mount(document.querySelector('.loading-container')) // 创建的实例挂载到元素上
        document.body.appendChild(instance.$el)    // 把创建的元素添加到body中  
    }
    Vue.prototype.$loading.close = () =>{
        let ele =document.querySelector('.loading-container')
        document.body.removeChild(ele)      // 不展示的时候移除元素
    }
}
export default Loading 



