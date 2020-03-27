<template>
  <div class="shop-list">
    <van-nav-bar title="安心买菜" left-arrow></van-nav-bar>
    <div class="shop-list-item">
      <div class="item-title">
        <span>商品</span>
        <span>共1件</span>
      </div>
      <div class="item-body">
        <img :src="shopListInfo.url" alt />
        <div class="right">
          <div class="right-title">
            <p class="top">
              <span class="title">{{shopListInfo.desc}}</span>
              <span>¥{{shopListInfo.price}}</span>
            </p>
            <p class="bottom">
              <span>单价：{{shopListInfo.price}}</span>
              <span>数量：1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopListInfo: null
    };
  },
  created() {
    this.shopListInfo = this.$route.params.data;
  }
};
</script>
<style lang="less">
.shop-list {
  background: #f1f1f1;
  p {
    margin: 0;
  }
  .shop-list-item {
    margin-top: 10px;
    background: #fff;
    padding: 5px 10px;
    font-size: 12px;
    color: #101010;
    .item-title {
      box-sizing: border-box;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #efe;
    }
    .item-body {
      display: flex;
      box-sizing: border-box;
      box-sizing: border-box;
      img {
        width: 60px;
        height: 60px;
        box-sizing: border-box;
        flex: 1;
      }
      .right {
        flex: 4;
        font-size: 13px;
        color: #333;
        .right-title {
          margin-top: 10px;
          margin-left: 5px;
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .bottom {
            margin-top: 10px;
            font-size: 12px;
            color: #989898;
          }
        }
      }
    }
  }
}
</style>