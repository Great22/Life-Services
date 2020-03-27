<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed></van-nav-bar>
    <div class="top">
      <div class="no-cart" v-show="!newCartLists">
        <img src="../../../static/imgs/cart.png" alt />
        <div class="top-btn">
          <van-button type="primary" size="small" round to="/home">去逛逛</van-button>
        </div>
      </div>
      <div class="got-cart" v-show="newCartLists">
        <!-- {{newCartLists}} -->
        <div class="cart-item" v-for="item in newCartLists" :key="item.id">
          <van-checkbox icon-size="16px" v-model="goo" checked-color="#07c160"></van-checkbox>
          <div class="content">
            <img :src="item.img" class="img" alt />
            <div class="title">
              <div class="sub-title">{{item.title}}</div>
              <div class="price">
                <span>¥{{item.price}}</span>
                <van-stepper v-model="item.count" min="0" @change="countChange(item)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下面的数据bottom,猜你喜欢的部分 -->
    <div class="bottom">
      <div class="title">·猜你喜欢·</div>
      <div class="title-bottom">
        <goods-item
          :item="goodsItem"
          v-for="goodsItem in item"
          :key="goodsItem.uid"
          class="item-go"
        ></goods-item>
      </div>
    </div>
    <!-- 去结算 -->
    <go-check :cart-list="newCartLists"></go-check>
  </div>
</template>
<script>
import GoodsItem from "../home/goodsItem";
import goCheck from "../goCheck";
export default {
  components: {
    "goods-item": GoodsItem,
    "go-check": goCheck
  },
  data() {
    return {
      item: [],
      checked: false,
      goo: false,
      value: 1
    };
  },
  created() {
    this.getItem();
  },

  computed: {
    newCartLists() {
      return JSON.parse(localStorage.getItem("cart"));
    }
  },
  methods: {
    //购物车数量变化，更新
    countChange(item) {
      // this.$store.commit("upDateCount", item);
      console.log(item);
    },
    getItem() {
      this.$http.get("../../../static/staticData/home/goods.json").then(res => {
        if (res.status === 200) {
          this.item = res.data.result.slice(10, 20);
        }
      });
    }
  },
  watch: {}
};
</script>

<style lang="less"  scoped>
.cart {
  padding-top: 46px;
  background-color: #f1f1f1;
  .top {
    .no-cart {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      img {
        flex: 100%;
      }
      .top-btn {
        margin: 10px auto;
      }
    }
    .got-cart {
      font-size: 12px;
      color: #262626;
      padding: 5px;
      .cart-item {
        box-sizing: border-box;
        display: flex;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
        background-color: #fff;
        .van-checkbox {
          flex: 1;
          margin-left: 20px;
        }
        .content {
          box-sizing: border-box;
          flex: 9;
          display: flex;
          justify-content: space-between;
          // align-items: center;
          .img {
            flex: 1;
            width: 70px;
            height: 70px;
          }
          .title {
            box-sizing: border-box;
            flex: 2;
            display: flex;
            flex-wrap: wrap;
            padding-left: 10px;
            color: #212121;
            font-weight: bolder;
            .sub-title {
              flex: 100%;
            }
            .price {
              flex: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .van-stepper {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    font-size: 14px;
    .title {
      text-align: center;
    }
    .title-bottom {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: space-between;
    }
  }
}
</style>