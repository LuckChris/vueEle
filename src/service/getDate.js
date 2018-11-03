import fetch from '@/config/fetch'

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
