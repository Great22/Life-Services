<template>
  <div class="goodsitem" @click="goDetails(item)">
    <img v-lazy="item.url" alt />
    <p class="text">{{item.title}}</p>
    <p class="price">
      <span class="price-now">
        <span class="now">¥{{item.price}}</span>
        <!-- <span class="green-card" v-show="index==0">
            ¥{{item.price-0.3}}
            <button>绿卡价</button>
        </span>-->
      </span>
      <span class="icon" @click.stop="addCart(item)">
        <van-icon name="shopping-cart-o"></van-icon>
      </span>
    </p>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  props: ["item"],
  
  methods: {
    //添加购物车成功提示信息
    addCart(item) {
      const  goodsInfo={
        id:item.uid,
        count:1,
        price:item.price,
        img:item.url,
        title:item.title,
        seleced:true
      }
      this.$store.commit("addToCart",goodsInfo)
      Toast.success("添加成功！");
    },
    //去详情页
    goDetails(item) {
      this.$router.push("/home/details/" + item.uid);
    }
  }
};
</script>
<style lang="less" scoped>
.goodsitem {
  flex: 1;
  box-sizing: border-box;
  width: 48%;
  border: 1px solid #eee;
  box-shadow: 0 0 4px #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 4px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  img {
    width: 100%;
  }
  .text {
    font-size: 14px;
    font-weight: bolder;
    margin-left: 10px;
    margin: 0;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    margin: 0;
    margin-top: 5px;
    .price-now {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      flex-wrap: wrap;
      .now {
        color: #f45a6c;
        font-size: 14px;
        flex: 100%;
      }
      .green-card {
        margin-top: 5px;
        flex: 100%;
        color: #56c96d;
        button {
          outline: none;
          border: none;
          background: #56c96d;
          color: #fff;
        }
      }
    }
    .icon {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      background: #47c470;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      padding-top: 4px;
    }
  }
}
</style>