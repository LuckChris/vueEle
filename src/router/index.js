import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile')), 'profile')
const city = r => require.ensure([], () => r(require('../page/city/index')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../page/food')), 'food')
const search = r => require.ensure([], () => r(require('../page/search')), 'search')
const orderList = r => require.ensure([], () => r(require('../page/orderList')), 'orderList')
const userCenter = r => require.ensure([], () => r(require('../page/userCenter')), 'userCenter')
const shop =r => require.ensure([],() => r(require('../page/shop')),'shop')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    { // 首页城市列表页
      path: '/home',
      component: home
    },
    { // 登录
      path: '/login',
      component: login
    },
    {
      path: '/profile',
      component: profile
    },
    { // 当前城市页
      path: '/city/:cityid',
      component: city
    },
    { // 商家信息页面
      path: '/msite',
      name: 'msite',
      component: msite
    },
    { // 单个商家信息页面
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
}]
