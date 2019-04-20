import fetch from '@/config/fetch'
import {getLS} from '@/config/utils'

/**
 * 获取首页默认城市
 *
 */
export const guessCity = () => fetch('/v1/cities', {
  type: 'guess'

})

/**
 * 获取热门城市
 */

export const hotCity = () => fetch('/v1/cities', {
  type: 'hot'
})

/**
 * 获取首页所有的城市
 */
export const groupCity = () => fetch('/v1/cities', {
  type: 'group'
})

/**
 *当前城市名字
 */
export const currentCity = number => fetch('/v1/cities/' + number)

/**
 *获取搜索城市
 */
export const searchPlace = (cityid, value) => fetch('./v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
})

/**
 * 获取msite页面的地址信息
 */
export const msiteAddress = geohash => fetch('/v2/pois/' + geohash)

/**
 * 获取用户信息
 */
export const getUser = () => fetch('/v1/user', {user_id: getLS('user_id')})

/**
 * 个人中心编辑地址
 */
/* eslint-disable */
export const getAddressList = (user_id) => fetch('/v1/users/' + user_id + '/addresses')

/**
 * 获取短信验证码
 */
export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
  mobile: phone,
  scene: 'login',
  type: 'sms'
}, 'POST')

/**
 * 获取图片验证码
 */
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 判断用户是否已经注册过
 */
export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
  [type]: checkNumber,
  type

})

/**
 * 账号密码登录
 */
/* eslint-disable */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST')

/**
 * 获取msite页食品分类列表
 */
export const msiteFoodTypes =geohash => fetch('/v2/index_entry',{
  geohash,
  group_type: '1',
  'flags[]':'F'
})

/**
 * 获取msite中的商铺
 */
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
	let supportStr = '';
	support_ids.forEach(item => {
		if (item.status) {
			supportStr += '&support_ids[]=' + item.id;
		}
	});
	let data = {
		latitude,
		longitude,
		offset,
		limit: '20',
		'extras[]': 'activities',
		keyword: '',
		restaurant_category_id,
		'restaurant_category_ids[]': restaurant_category_ids,
		order_by,
		'delivery_mode[]': delivery_mode + supportStr
	};
	return fetch('/shopping/restaurants', data);
};

