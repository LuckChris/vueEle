import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile')), 'profile')

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
    {
      path: '/login',
      component: login
    },
    {
      path: '/profile',
      component: profile
    }
  ]
}]
