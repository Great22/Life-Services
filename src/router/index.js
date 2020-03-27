import Vue from 'vue'
import Router from 'vue-router'
//主页
import Home from '../components/home/home'
import GoodsDetails from "../components/home/goodsDetails"
// 分类
import Sort from '../components/sort/sort'
// 我的
import File from '../components/file/file'
// 购物车
import Cart from '../components/cart/cart'
import Order from "../components/cart/order"
import ShopList from "../components/cart/shoplist"

import Vip from "../components/vipCard"
// import goCheck from "../components/goCheck"
import Login from "../components/login"
import Register from "../components/Register"
import Address from "../components/Address"

import UserDetails from "../components/file/userDetails"

import { Dialog } from 'vant';
Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/home/details/:id",
      component: GoodsDetails
    },
    {
      path: "/sort",
      name: "sort",
      component: Sort

    }, {
      path: "/file",
      component: File
    },
    {
      path: "/file/login",
      component: Login
    },
    {
      path: "/file/user",
      component: UserDetails
    }, {
      path: "/register",
      component: Register
    }, {
      path: "/file/address",
      component: Address
    },
    {
      path: "/cart",
      component: Cart
    }, {
      path: "/cart/order",
      name: "order",
      component: Order
    }, {
      path: "/cart/shoplist",
      name: "shoplist",
      component: ShopList
    },
    {
      path: "/vip",
      component: Vip
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == "/cart") {
    Dialog.confirm({
      title: '温馨提示',
      message: '您还没有登录，现在去登陆？'
    }).then(() => {
      // on confirm
    }).catch(() => {
      // on cancel
    });
  }
  if (to.path == "/cart/order") {
    Dialog.confirm({
      title: '温馨提示',
      message: '您还没有登录，现在去登陆？'
    }).then(() => {
      next("/file/login")
    }).catch(() => {
      // on cancel
    });
  }
  if (to.path == "/file") {
    Dialog.confirm({
      title: '温馨提示',
      message: '您还没有登录，现在去登陆？'
    }).then(() => {
      // this.$router.push("/")
      next("/file/login")
    }).catch(() => {
      // 客户点击取消，只能跳转至主页
      // next("/home")
    });
  }
  next()
})
export default router