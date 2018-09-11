import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

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
    }
  ]
}]
