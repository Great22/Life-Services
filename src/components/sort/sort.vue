<template>
  <div class="sort">
    <van-nav-bar title="商品分类" left-arrow :border="false" fixed @click-left="$router.go(-1)"></van-nav-bar>
    <div class="fix">
      <van-row>
        <van-col span="6">
          <ul class="left">
            <li
              v-for="item in sortList"
              :key="item.period"
              @click="changeItem(item.period)"
              :class="{'active':item.period==currentPeriod}"
            >
              <router-link to="/sort">{{item.title}}</router-link>
            </li>
          </ul>
        </van-col>
        <van-col span="18">
                 <div class="right">
            <div class="right-title">{{currentTitle}}</div>
            <div
              class="item-content"
              v-for="item in goodsLists"
              :key="item.uid"
              @click="goDeatils(item.uid)"
            >
              <!-- 右边的图片部分 -->
              <div class="item-img">
                <img v-lazy="item.url" alt  />
              </div>
              <!-- 右边列表部分 -->
              <div class="item-right">
                <div class="item-right-title">
                  <span class="item-title">{{item.title.slice(0,13)}}</span>
                  <span class="item-subtitle">{{item.desc.slice(0,14)}}</span>
                </div>
                <!-- 价格以及购物车图标 -->
                <div class="item-cart">
                  <div class="price">
                    <div class="price-now">
                      <span>¥</span>
                      <span>{{item.price}}</span>
                    </div>
                    <div class="cart" @click="goCart">
                      <van-icon name="shopping-cart-o" size="18"></van-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      sortList: [],
      currentPeriod: 13,
      currentTitle: "新鲜蔬果",
      isLoading: false,
      goodsLists: []
    };
  },
  created() {
    this.getSortList();
    this.changeItem(this.currentPeriod);
  },

  methods: {
    //添加到购物车
    goCart() {
      Toast.success("添加成功");
    },
    getSortList() {
      this.$http.get("../../../static/staticData/home/grid.json").then(res => {
        if (res.status == 200) {
          this.sortList = res.data.result.map(item => {
            let obj = { title: item.title, period: item.period };
            return obj;
          });
        
        }
      });
    },
    //第一次进来时，显示数据
    getItem(period) {
      this.$http.get("../../../static/staticData/home/grid.json").then(res => {
        if (res.status == 200) {
          return res.data.result.filter(item => {
            if (item.period == period) {
              this.currentTitle = item.title;
            }
          });
        }
      });
    },
    changeItem(period) {
      this.currentPeriod = period;
      this.getItem(period);
      this.$http.get("../../../static/staticData/home/goods.json").then(res => {
        if (res.status == 200) {
          this.goodsLists = res.data.result.filter(item => {
            if (item.period === this.currentPeriod) {
              return item;
            }
          });
        }
      });
    },
    // 去详情页面
    goDeatils(id) {
      this.$router.replace("/home/details/" + id);
    }
  }
};
</script>

<style lang="less"  scoped>
.sort {
  background-color: #fff;
  margin-top: 46px;
  .van-nav-bar {
    background: green;
    .van-nav-bar__title,
    .van-nav-bar__arrow {
      color: #fff;
    }
  }
  .fix {
    position: fixed;
    .left {
      background-color: #f7f7f7;
      .active {
        background: #fff;
      }
      li {
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        text-align: center;
        border-bottom: 1px solid #efefef;
        a {
          color: #3e3d3d;
        }
      }
    }
    .right {
      height: 700px;
      overflow: scroll;
      background-color: #fff;
      .right-title {
        color: #5e5e5e;
        font-size: 13px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        margin: 0 8px;
      }
      .item-content {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        height: 120px;
        padding: 0 5px;
        margin: 10px 8px;
        box-sizing: border-box;
        .item-img {
          flex: 2;
          // text-align: center;
          padding-right: 5px;
          img {
            height: 80%;
          }
        }
        .item-right {
          flex: 3;
          font-size: 14px;
          color: #373737;
          .item-right-title {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;

            .item-title {
              flex: 100%;
              line-height: 18px;
              height: 18px;
            }
            .item-subtitle {
              margin-top: 13px;
              padding-top: 3px;
              flex: 100%;
              color: #8c8c8c;
              font-size: 12px;
              height: 16px;
              line-height: 16px;
            }
          }
          .item-cart {
            color: #ff4f67;
            font-weight: bolder;
            margin-top: 15px;
            .price {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .cart {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                background: #47c470;
                color: #fff;
                text-align: center;
                vertical-align: center;
                position: relative;
                .van-icon-shopping-cart-o {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>