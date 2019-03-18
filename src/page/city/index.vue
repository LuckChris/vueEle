<template lang='pug'>
 .city-wrapper-content
    head-top(:head-title="cityname", go-back='true')
      router-link(to='/home',slot='changecity' class='change-city') 切换城市
    .address-input
      input(placeholder='输入学校、商务楼、地址' type='search' required v-model='inputVal' name='city')
    .submit-btn(@click='submitHandler')
      button 提交
    .search-history(v-if='showHistoryTitle') 搜索历史
    .search-history-list
      ul
        li(v-for='(item,index) in placeList' @click='chooseCity(index, item.geohash)')
          h4.ellipsis {{item.name}}
          p.ellipsis {{item.address}}
    footer.clear-all-history(v-if='showHistoryTitle && placeList.length' @click='clearAllHandler') 清空所有
    .search-no-place(v-if='noPlace') 很抱歉！无搜索结果
</template>
<script>
import headTop from '@/components/header'
import {currentCity, searchPlace} from '@/service/getDate'
import {setLS, getLS, removeLS} from '@/config/utils'
export default{
  data () {
    return {
      cityname: '', // 当前城市名字
      showHistoryTitle: true, // 默认显示搜索头部
      noPlace: false,
      placeList: [], // 搜索城市列表
      inputVal: '',
      historyArr: [] // 历史搜索记录
    }
  },
  components: {headTop},
  mounted () {
    let cityId = this.$route.params.cityid
    currentCity(cityId).then(res => {
      this.cityname = res.name
    })
    this.initData()
  },
  methods: {
    initData () {
      // 获取搜索历史记录
      if (getLS('historyArr')) {
        this.placeList = JSON.parse(getLS('historyArr'))
      } else {
        this.placeList = []
      }
    },
    submitHandler () {
      if (this.inputVal) {
        searchPlace(this.cityId, this.inputVal).then(res => {
          this.placeList = res
          this.showHistoryTitle = false
          this.noPlace = !res.length
        })
      }
    },
    chooseCity (index, geohash) {
      let history = getLS('historyArr')
      let choosePlace = this.placeList[index]
      if (history) {
        let flagRepeat = false
        this.historyArr = JSON.parse(history)
        this.historyArr.forEach(item => {
          if (item.geohash === geohash) {
            flagRepeat = true
          }
        })
        if (!flagRepeat) {
          this.historyArr.push(choosePlace)
        }
      } else {
        this.historyArr.push(choosePlace)
        setLS('historyArr', this.historyArr)
      }
      this.$router.push({name: 'msite', query: {geohash}})
    },
    clearAllHandler () {
      removeLS('historyArr')
      this.placeList = []
    }
  }

}
</script>
<style lang='scss' scoped>
 @import 'src/style/mixin';
.city-wrapper-content{
  // font-size: 0.55rem;
  padding-top: 2.3rem;
}
.change-city{
  right: 0.4rem;
  @include ct;
  @include sc(.6rem,#fff)
  }
  .address-input{
    padding: 0 .4rem;
    input{
      width:100%;
      height: 1.4rem;
      border-radius: 0.08rem;
      border: 1px solid $bc;
      padding-left: 0.4rem;
      outline: none;
    }
  }
  .submit-btn{
    padding:0.6rem  0.4rem;
    button{
      background-color: $blue;
      @include wh(100%, 1.4rem);
      outline: none;
      border: none;
      color: #fff;
      border-radius: 0.08rem;
    }
  }
  .search-history {
      border-top: 1px solid $bc;
      border-bottom: 1px solid $bc;
      padding: 0.2rem;
      padding-left: 0.5rem;
      @include font(0.475rem, 0.8rem);

  }
  .search-history-list{
    border-top: 1px solid $bc;
    background-color: #fff;
    ul {
      li{
        padding: 0.4rem;
        border-bottom: 1px solid $bc;
        h4{
          font-size: 0.65rem;
          padding-bottom:.4rem;
        }
        p{
          font-size: 0.45rem;
        }
      }
    }

  }
  .clear-all-history{
    background-color: #fff;
    text-align: center;
    padding: .4rem;
    font-size: .7rem;
  }
  .search-no-place{
    margin: 0 auto;
    @include font(0.65rem, 1.75rem);
    color: #333;
    background-color: #fff;
    text-indent: 0.5rem;
    text-align: center;
  }

</style>
