<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
      route
      @change="change"
    >
      <van-tabbar-item icon="wap-home-o" replace to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="qr-invalid" replace to="/sort">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o"  replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/file">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,count:0
    };
  },
  methods: {
    change(index) {
      // console.log(index);
    }
  }
};
</script>