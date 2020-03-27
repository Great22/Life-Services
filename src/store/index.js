import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


var cart = []
if (!JSON.parse(localStorage.getItem("cart")) == "undefined") {
    cart = JSON.parse(localStorage.getItem("cart"))

}
export default new Vuex.Store({
    state: {
        cart: cart
        //将购物车里面的数据，用一个对象存储起来，
        //数组中存储的数据包含了商品的一些属性
        //{id:商品id,count:购买数量,price:价格，选中与否selected：boolean,图片：img,title:文本}
    },
    getters: {

    },//类似于计算属性
    mutations: {
        addToCart(state, goodsinfo) {
            //把商品信息保存到cart里面若此前已经存在此商品，只更新数量
            //先假设没有找到
            let flag = false;
            state.cart.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += 1;
                    flag = true;
                    return true;
                }
            })
            if (!flag) {
                state.cart.push(goodsinfo)
            }

            localStorage.setItem("cart", JSON.stringify(state.cart))
            // console.log(state.cart)
        },
        upDateCount(state, goodItem) {


        }

    },
    getters: {

    }
})