<template>
  <div class="go-check">
    <div class="goo">
      <div class="felt">
        <van-checkbox v-model="checked" icon-size="16px" @change="buyChange" checked-color="#07c160"></van-checkbox>
        <span>全选</span>
      </div>
      <div class="check">
        <p>
          <span>合计:</span>
          <span>{{0}}元</span>
        </p>
        <van-button color="#E54D42" round size="small" @click="goCheck" >去结算</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      checked: false
    };
  },
  props: ["cartList"],
  methods: {
    goCheck() {
      if (this.cartList.length < 1) {
        Toast("请先选择商品");
      } else {
        Toast("good");
        console.log(this.cartList)
      }
    },
    buyChange(checked) {
        console.log(checked)
    }
  }
};
</script>

<style lang="less" scoped>
.go-check {
  position: fixed;
  bottom: 50px;
  width: 100%;
  left: 0;
  background: #fff;
  height: 50px;
  .goo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .felt {
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-left: 20px;
      font-size: 12px;
      color: #9a9a9a;
      .van-checkbox {
        flex: 100%;
        margin-left: 3px;
      }
      span {
        flex: 100%;
        margin-top: 3px;
      }
    }
    .check {
      flex: 4;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>