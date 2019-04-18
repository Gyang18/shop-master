/**
 * 项目所有路由配置文件
 *
 * * */

// 工作台
import Workbench from './pages/Workbench'
// 商品管理
import Goods from './pages/Goods'
// 订单管理
import Order from './pages/Order'
import Login from './pages/Login'
// 默认路由模块
const mainRouterConfig = [
  {
    path: '/workbench',
    component: Workbench
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/order',
    component: Order
  }
]
// 用户模块的路由
const userRouterConfig = [
  {
    path: '/user/login',
    component: Login
  }
]
export { mainRouterConfig, userRouterConfig }
