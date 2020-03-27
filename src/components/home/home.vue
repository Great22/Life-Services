<template>
  <div id="home">
    <!-- 主页轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <router-link to="/sort">
          <img v-lazy="image.url" alt />
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- vant 九宫格 -->
    <!-- <van-grid :column-num="5"  icon-size="36" :border="false">
     <van-grid-item
    v-for="item  in gridLists "
    :key="item.uid"
    :icon="item.url"
    :text="item.title"
     />
    </van-grid>-->
    <!-- 自定义九宫格 -->
    <div class="grid">
      <div class="grid-item" v-for="item in gridLists" :key="item.uid" @click="goSort(item)">
        <img v-lazy="item.url" :alt="item.url" />
        <span>{{item.title}}</span>
      </div>
    </div>
    <!-- 加入vip -->
    <my-vip></my-vip>
    <!-- 今日疯抢 hot-->
    <div class="hot">
      <div class="hot-title">
        <van-icon name="star-o" />
        <span class="center">今日疯抢</span>
        <van-count-down :time="nowTime">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours|addFormat}}</span>
            <span class="item">{{ timeData.minutes|addFormat }}</span>
            <span class="item">{{ timeData.seconds|addFormat }}</span>
          </template>
        </van-count-down>
      </div>
      <van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" left-icon="volume-o" />
      <div class="hot-scroll">
        <div class="wrap">
          <ul class="goods-wrap">
            <li v-for="item in hotLists" :key="item.uid" class="wrap-item" @click="goDetails(item)"> 
              <img v-lazy="item.url" alt />
              <div class="wrap-title">
                <p>{{item.title}}</p>
              </div>
              <div class="price">
                <span class="nowP">¥{{item.price}}</span>
                <span class="cart"  @click.stop="addCart(item)">
                  <van-icon name="shopping-cart-o" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like">
      <div class="like-title">
        <van-icon name="star-o" />
        <span class="center">猜你喜欢</span>
      </div>
      <!-- 商品列表 -->
      <goods-list></goods-list>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
//自定义组件
import myVip from "../myVip";
import GoodsList from "../home/goodsList";
import GoodsItem from "../home/goodsItem";
import Scroll from "../scroll";
import {Toast} from "vant"
export default {
  components: {
    "my-vip": myVip,
    "goods-list": GoodsList,
    "goods-item": GoodsItem,
    scroll: Scroll
  },
  filters: {
    addFormat(value) {
      return value > 9 ? value : "0" + value;
    }
  },
  data() {
    return {
      images: [],
      gridLists: [],
      time: new Date(),
      hotLists: []
    };
  },
  created() {
    this.getLunboLists();
    this.getGridLists();
    this.getHot();
  },

  computed: {
    nowTime() {
      let endTimeS = this.time.getTime() + 24 * 60 * 60 * 1000;
      let dt = new Date(endTimeS);
      let Y = dt.getFullYear();
      let M = dt.getMonth() + 1 > 12 ? 1 : dt.getMonth() + 1;
      let D = dt.getDate();
      let end = `${Y}-${M}-${D}`;
      let endTime = new Date(end);

      return endTime - this.time;
    }
  },

  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    getLunboLists() {
      this.$http
        //本地静态数据
        .get("../../../static/staticData/home/swipe.json")
        .then(res => {
          // console.log(res)
          if (res.status == 200) {
            this.images = res.data.result;
          }
        });
    },
    getGridLists() {
      this.$http.get("../../../static/staticData/home/grid.json").then(res => {
        this.gridLists = res.data.result;
      });
    },
    goSort(item) {
      this.$router.push({
        name: "sort",
        params: {
          period: item.period
        }
      });
    },
    //热抢项目初始化数据
    getHot() {
      this.$http.get("../../../static/staticData/home/goods.json").then(res => {
        if (res.status == 200) {
          this.hotLists = res.data.result.filter(item => {
            if (item.period == 13) {
              return item;
            }
          });
          // console.log(this.hotLists);
        }
      });
    },
    goDetails(item){
     this.$router.push("/home/details/" + item.uid);
    },
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
  }
};
</script>

<style lang="less"  scoped>
#home {
  height: 100%;
  .van-swipe-item {
    img {
      width: 100%;
      height: 210px;
    }
  }
  .grid {
    background: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .grid-item {
      box-sizing: border-box;
      width: 20%;
      height: 90px;
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0px 10px;
      justify-items: center;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        margin-top: 10px;
        font-size: 12px;
        color: #3c3b3b;
      }
    }
  }
  .hot {
    background: #fff;
    .item {
      display: inline-block;
      width: 22px;
      border-radius: 2px;
      margin-right: 5px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #1989fa;
    }
    .hot-scroll {
      width: 100%;
      height: 150px;
      overflow: hidden;
      .wrap {
        width: 100%;
        /* 和父盒子宽度一样 */
        height: 170px;
        /* 比里层元素高16px 为了隐藏滚动条*/
        overflow-x: scroll;
        /* 定义超出此盒子滚动 */
        overflow-y: hidden;
        .goods-wrap {
          width: 100%;
          display: flex;
          padding: 0 10px;
          .wrap-item {
            flex: 1;
            width: 120px;
            box-sizing: border-box;
            font-size: 12px;
            color: #101010;
            img {
              width: 90px;
              height: 80px;
            }
            p {
              margin: 0;
            }
            display: flex;
            flex-direction: column;
            padding: 0 5px;
            .wrap-title {
              height: 20px;
              line-height: 20px;
            }
            .price {
              margin-top: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 6px;
              box-sizing: border-box;
              .nowP {
                color: #f45a6c;
                font-weight: bolder;
              }
              .cart {
                width: 18px;
                height: 18px;
                background: #47c470;
                border-radius: 50%;
                position: relative;
                .van-icon-shopping-cart-o {
                  color: #fff;
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
    .hot-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      .van-icon-star-o {
        font-weight: bolder;
        font-size: 16px;
        margin-left: 10px;
        color: green;
      }
      .center {
        margin-left: 5px;
        font-size: 16px;
        font-weight: bolder;
      }
      .van-count-down {
        margin-left: 15px;
      }
    }
    .hot-scroll {
      overflow: hidden;
      .scroll-item {
        display: flex;
        img {
          width: 80px;
          height: 90px;
        }
      }
    }
  }
  .like {
    .like-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      .van-icon-star-o {
        font-weight: bolder;
        font-size: 16px;
        margin-left: 10px;
        color: green;
      }
      .center {
        margin-left: 5px;
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }
}
</style>