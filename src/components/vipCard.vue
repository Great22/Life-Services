<template>
  <div class="vip-card">
    <van-nav-bar title="叮咚会员" fixed left-arrow @click-left="goBack"></van-nav-bar>
    <div class="vip-head">
      <div class="vip-head-box">
        <p>开通绿卡会员平均每年可省806元</p>
      </div>
    </div>
    <div class="green-card">
      <div class="green-title">
        <p>绿卡特权</p>
      </div>
      <div class="green-body">
        <div class="green-body-item">
          <div class="img">
            <img src="../../static/imgs/youhuiquan.png" alt />
          </div>
          <p class="center">专享劵</p>
          <p class="footer">天天可领</p>
        </div>
        <div class="green-body-item">
          <div class="img">
            <img src="../../static/imgs/biaoqian.png" alt />
          </div>
          <p class="center">专享特价</p>
          <p class="footer">每周一可领</p>
        </div>
        <div class="green-body-item">
          <div class="img">
            <img src="../../static/imgs/ico.png" alt />
          </div>
          <p class="center">两倍积分</p>
          <p class="footer">积分可兑换</p>
        </div>
        <div class="green-body-item">
          <div class="img">
            <img src="../../static/imgs/gengduomore13.png" alt />
          </div>
          <p class="center">更多特权</p>
          <p class="footer">敬请期待</p>
        </div>
      </div>
      <div class="green-footer">
        <van-button type="primary" round color="#364153" @click="goGreen">5折开通绿卡</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goGreen() {
      Toast({
        message: "go fighting",
        icon: "https://img.yzcdn.cn/vant/logo.png",
        position: "bottom"
      });
    }
  }
};
</script>
<style lang="less"scoped>
.vip-card {
  padding-top: 46px;
  .vip-head {
    box-sizing: border-box;
    background: #1d2434;
    height: 115px;
    position: relative;
    color: #333;
    font-size: 14px;
    .vip-head-box {
      box-sizing: border-box;
      background-color: #33e97b;
      border: 1px solid #d3dc8e;
      border-bottom: none;
      position: absolute;
      bottom: 0;
      width: 94%;
      height: 83px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      transform: translate(3%);
      text-align: center;
      vertical-align: middle;
      p {
        margin-top: 30px;
      }
    }
  }
  .green-card {
    background: #fff;
    .green-title {
      color: #383940;
      font-size: 16px;
      font-weight: 900;
      p {
        margin-left: 10px;
      }
    }
    .green-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .green-body-item {
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        color: #8b8b8b;
        font-size: 12px;
        .img {
          margin: 0 auto;
          width: 37px;
          height: 37px;
          border-radius: 50%;
          border: 1px solid #1e1e1e;
          position: relative;
          img {
            width: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      p {
        margin: 3px;
      }
      .center {
        color: #2c2c2c;
      }
      .footer {
        margin: 0;
      }
    }
    .green-footer {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>