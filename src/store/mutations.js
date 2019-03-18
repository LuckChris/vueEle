import { RECORD_USERINFO, GET_USERINFO } from './mutation-types.js'
import { setLS } from '@/config/utils.js'

export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setLS('user_id', info.user_id)
  },
  // 获取用户信息存入
  [GET_USERINFO] (state, info) {}
}
