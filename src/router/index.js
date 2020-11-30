import { createRouter, createWebHashHistory } from 'vue-router'
const picture =()=>require('../views/content/picture/picture')
const summer=()=>require('../views/content/summer/summer')
const columPicture=()=>require('../views/content/picture/columPicture')
const meirituijian=()=>require('../views/content/music/meirituijian/meirituijian')
const navkuangjia=()=>require('../views/content/music/navkuangjia')
const geci=()=>require('../views/content/music/geci/geci')
const shipin=()=>require('../views/content/music/shipin/shipin')
const woxihuan=()=>require('../views/content/music/woxihuan/woxihuan')
const routes = [
  {
    path:'/',
    redirect:'/picture'
  },{
    path: '/picture',
    name: 'picture',
    meta:{index:0},
    component:picture
  },{
    path: '/summer',
    name: 'summer',
    meta:{index:1},
    component:summer
  },{
    path: '/navkuangjia',
    name: 'navkuangjia',
    meta:{index:2},
    component:navkuangjia,
    children:[
      {
        path: 'meirituijian',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'meirituijian',
        component: meirituijian
      },{
        path: 'geci',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'geci',
        component: geci
      },{
        path: 'shipin',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'shipin',
        component: shipin
      },{
        path: 'woxihuan',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'woxihuan',
        component: woxihuan
      },
    ]
  },{
    path: '/columPicture',
    name: 'columPicture',
    meta:{index:3},
    component:columPicture
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode : history,

})

export default router
