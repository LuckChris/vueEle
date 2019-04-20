import { RECORD_USERINFO,
        GET_USERINFO,
        SAVE_GEOHASH ,
        RECORD_ADDRESS} from './mutation-types.js'
import { setLS } from '@/config/utils.js'

export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setLS('user_id', info.user_id)
  },
  // 获取用户信息存入
  [GET_USERINFO] (state, info) {},

  // 记录经纬度
  [SAVE_GEOHASH](state,geohash) {
    state.geohash = geohash
  },
  // 记录经纬度
  [RECORD_ADDRESS](state,{latitude,longitude}) {
    state.longitude = longitude,
    state.latitude = latitude
  }
}
