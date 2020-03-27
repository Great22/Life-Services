<template>
  <div id="file">
    <!-- 头部 -->
    <div class="file-top" @click="goUser">
      <img src="../../../static/imgs/1.jpg" alt />
      <div class="top-left">
        <div class="left-title">
          <p>
            会员号：
            <span>123456</span>
          </p>
          <p>
            手机号：
            <span>182xxxxxxxx</span>
          </p>
        </div>
        <div class="icon__o">
          <van-icon name="arrow" size="30" />
        </div>
      </div>
    </div>
    <div class="three-top">
      <div class="item">
        <p>0</p>
        <p class="second-item">优惠券</p>
      </div>
      <div class="item">
        <p>0</p>
        <p class="second-item">积分</p>
      </div>
      <div class="item">
        <p>0</p>
        <p class="second-item">余额(元)</p>
      </div>
    </div>
    <!-- 我的订单    -->
    <div class="my-list">
      <div class="list-top">
        <div class="list-top-left">
          <van-icon name="orders-o" size="18px" color="#ffd944" />
          <span>我的订单</span>
        </div>
        <div class="list-top-right">
          <span>查看全部订单</span>
          <van-icon name="arrow" size="14px" color="#c6c6c6" />
        </div>
      </div>
      <div class="list-body">
        <div class="list-body-item">
          <van-icon name="pending-payment" size="30px" color="#878787" />
          <p>待支付</p>
        </div>
        <div class="list-body-item">
          <van-icon name="paid" size="30px" color="#878787" />
          <p>待发货</p>
        </div>
        <div class="list-body-item">
          <van-icon name="logistics" size="30px" color="#878787" />
          <p>待收货</p>
        </div>
        <div class="list-body-item">
          <van-icon name="comment-o" size="30px" color="#878787" />
          <p>待评价</p>
        </div>
        <div class="list-body-item">
          <van-icon name="cash-back-record" size="30px" color="#878787" />
          <p>退款</p>
        </div>
      </div>
    </div>
    <!-- 好友地址 -->
    <div class="friends-address">
      <file-list name="friends-o" text="邀请好友" color="#ffd944" click-text="friends"></file-list>
      <file-list name="user-circle-o" text="收货地址" click-text="address"></file-list>
    </div>
    <div class="green-card">
      <file-list text="我的绿卡" name="idcard" click-text="idcard"></file-list>
    </div>

    <div class="contact-o">
      <file-list text="联系电话" name="phone-circle-o" click-text="phone"></file-list>
      <file-list text="意见反馈" name="coupon-o" color="#ffd944" click-text="coupon"></file-list>
    </div>
    <div class="version">
      <div class="list-left">
        <van-icon name="setting-o" size="18px" color="rgb(118, 211, 72)" />
        <span>关于</span>
      </div>
      <p>当前版本1.0.0</p>
    </div>
  </div>
</template>
<script>
import fileList from "../file/fileList";

export default {
  components: {
    "file-list": fileList
  },
  data() {
    return {};
  },
  methods: {
    address() {
      this.$router.push("/file/address");
    },
    goUser() {
      this.$router.push("/file/user");
    }
  }
};
</script>

<style lang="less"  scoped>
#file {
  background-color: #f1f1f1;
  min-height: 800px;
  .file-top {
    background: #3bba63;
    box-sizing: border-box;
    height: 130px;
    color: #fff;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    font-size: 13px;
    //  font-weight:bolder;
    .top-left {
      display: flex;
      flex: 4;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
    }
    p {
      margin: 5px 0;
    }
    img {
      flex: 1;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .three-top {
    margin-top: 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    height: 75px;
    p {
      margin: 5px 0;
    }
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #322f30;
      font-size: 12px;
      .second-item {
        color: #4a4a4a;
      }
    }
  }
  .my-list {
    margin-top: 10px;
    background: #fff;
    height: 140px;
    padding: 0 10px;
    .list-top {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 40px;
      height: 40px;
      border-bottom: 1px solid #eee;
      .list-top-left {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
          color: #0f0f0f;
        }
        .van-icon-orders-o {
          font-weight: bolder;
        }
      }
      .list-top-right {
        display: flex;
        align-items: center;
        span {
          font-size: 12px;
          color: #909090;
          margin-right: 5px;
        }
      }
    }
    .list-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 90px;
      .list-body-item {
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin: 0;
          margin-top: 5px;
          color: #131313;
          font-size: 13px;
        }
      }
    }
  }
  .friends-address {
    margin-top: 10px;
  }
  .green-card {
    margin: 10px 0;
  }
  .contact-o {
    height: 80px;
  }
  .version {
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    line-height: 40px;
    height: 40px;
    color: #8799a3;
    .list-left {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
        color: #8799a3;
      }
    }
  }
}
</style>