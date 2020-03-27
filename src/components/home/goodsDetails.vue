<template>
  <div class="details">
    <!-- 导航栏 -->
    <van-nav-bar title="产品详情" left-text="返回" left-arrow fixed @click-left="goBack"></van-nav-bar>
    <!-- 产品介绍 -->
    <div class="details-title">
      <div class="title-head">
        <img :src="detailsInfo.url" alt />
        <p class="center">
          <span class="left">{{detailsInfo.title}}</span>
          <span class="right">{{detailsInfo.desc}}</span>
        </p>
        <p class="price">
          ¥
          <span>{{detailsInfo.price}}</span>
        </p>
      </div>
      <van-divider />
      <div class="title-footer">
        <van-icon name="clock-o"></van-icon>
        <span>最快29分钟送达</span>
      </div>
    </div>
    <!-- vip卡区域 -->
    <my-vip></my-vip>
    <!-- 评论区域 -->
    <my-comments></my-comments>
    <!-- 规格 specs -->
    <div class="specs">
      <div class="specs-title">
        <p>规格</p>
      </div>
      <div class="specs-body">
        <div class="body-item">
          <span class="first">净含量</span>
          <span class="second">{{detailsInfo.weight}}</span>
        </div>
        <div class="body-item">
          <span class="first">保存条件</span>
          <span class="second">{{detailsInfo.conditions}}</span>
        </div>
        <div class="body-item">
          <span class="first">保质期</span>
          <span class="second">{{detailsInfo.shelf_life}}</span>
        </div>
      </div>
    </div>
    <div class="footer-img">
      <img :src="detailsInfo.url" alt />
    </div>
    <p class="detail-footer">我也是有底线的~</p>
    <div class="add-detail">
      <div class="content">
        <p @click="goCart">
         <van-icon name="shopping-cart-o" size="24px"  />
          <span>购物车</span>
        </p>
        <div class="add-button">
          <van-button type="primary" size="small" round color="#f37b1d" @click="addToCart">加入购物车</van-button>
          <van-button type="primary" size="small" round color="#e54d42" @click="buyNow">立即购买</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyVip from "../myVip";
import Comments from "../comment";
export default {
  components: {
    "my-vip": MyVip,
    "my-comments": Comments
  },
  data() {
    return {
      detailsInfo: {}
    };
  },

  created() {
    this.getDetails();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getDetails() {
      this.$http.get("../../../static/staticData/home/goods.json").then(res => {
        // console.log(res.data.result);
        if (res.status == 200) {
          res.data.result.forEach(item => {
            if (item.uid === this.$route.params.id) {
              this.detailsInfo = item;
            }
          });
        }
      });
    },
    //查看购物车情况,去购物车页面
    goCart(){
      this.$router.push("/cart")
    },
    //加入购物车
    addToCart(){
      console.log(this.detailsInfo)
    },
    //立即购买
    buyNow(){
  this.$router.push({
    name:"order",params:{
      data:this.detailsInfo
    }
  })
    }
  }
};
</script>
<style lang="less"  scoped>
.details {
  background: #f8f4f5;
  min-height: 1000px;
  .van-nav-bar {
    background-color: #4c7733;
    .van-icon-arrow-left {
      color: #fff;
    }
    .van-nav-bar__text {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
  .details-title {
    background: #fff;
    margin-bottom: 5px;
    .van-divider--hairline {
      margin: 5px;
    }
    .title-head {
      margin: 0;
      img {
        width: 100%;
      }
      .price {
        margin: 5px 0;
        margin-left: 5px;
        color: #f25d65;
        vertical-align: middle;
        span {
          font-weight: bolder;
        }
      }
      .center {
        margin: 0;
        margin-left: 5px;
        padding: 3px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .left {
          flex: 100%;
          font-size: 15px;
          color: #151513;
          font-weight: bolder;
          padding-bottom: 3px;
        }
        .right {
          font-size: 12px;
          color: #878787;
        }
      }
    }
    .title-footer {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      margin-left: 5px;
      padding-bottom: 5px;
      span {
        color: #1e1e1e;
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
  .specs {
    background: #fff;
    .specs-title {
      color: #2f2f2f;
      font-size: 14px;
      font-weight: bolder;
      padding-left: 9px;
      margin-top: 5px;
      p {
        margin: 0;
        height: 36px;
        line-height: 36px;
      }
    }
    .specs-body {
      font-size: 12px;
      color: #606060;
      .body-item {
        border-top: 1px solid #ccc;
        height: 42px;
        line-height: 42px;
        display: flex;
        justify-content: space-around;
        .first {
          flex: 2;
          margin-left: 10px;
        }
        .second {
          flex: 3;
          margin-left: 10px;
        }
      }
    }
  }
  .footer-img {
    background: #fff;
    margin-top: 10px;
    img {
      width: 100%;
    }
  }
  .detail-footer {
    text-align: center;
  }
  .add-detail {
    box-sizing: border-box;
    position: fixed;
    height: 60px;
    width:100%;
    z-index: 99999;
    left: 0;
    bottom: 0px;
    background: #fff;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        flex:2;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size:12px;
        color:#3b3b3b;
      }
      .add-button{
        flex:5;
        display: flex;
        justify-content: space-around;
        margin-left: 20px;
      }
    }
  }
}
</style>