<template>
  <div id="order">
    <van-nav-bar title="安心买菜" left-arrow></van-nav-bar>
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showListAddress"
      add-text="请添加收货地址"
    />
    <div class="deliver">
      <div class="deliver-title">
        <div class="left">送达时间</div>
        <div class="right" @click="show=true">
          <span>{{deliverTimes}}</span>
          <van-icon name="arrow" size="16px" />
        </div>
      </div>
      <div class="deliver-body">
        <img :src="orderInfo.url" alt />
        <div class="right" @click="$router.push({name:'shoplist',params:{data:orderInfo}})">
          <span>共1件</span>
          <van-icon name="arrow" size="16px" />
        </div>
      </div>
    </div>
    <div class="remarks">
      <span>备注</span>
      <van-field v-model="value" placeholder="选填,告诉小哥你的特殊要求" />
    </div>
    <div class="pay">
      <div class="pay-style">
        <span class="span">支付方式</span>
        <p class="right" @click="payShow=true">
          <span>余额</span>
          <van-icon name="arrow" size="16px" />
        </p>
      </div>
      <div class="card" @click="cardShow">
        <span class="span">优惠券</span>
        <p class="right">
          <span>0张可用</span>
          <van-icon name="arrow" size="16px" />
        </p>
      </div>
    </div>
    <div class="payment">
      <div class="item">
        <span class="first">商品金额</span>
        <span class="second">¥ {{orderInfo.price}}</span>
      </div>
      <div class="item">
        <span class="first">配送费</span>
        <span class="second">¥ 10</span>
      </div>
      <div class="item">
        <span class="first">积分</span>
        <span class="second">+ {{orderInfo.price}}</span>
      </div>
      <div class="footer">
        <span>实付：{{orderInfo.price}}元</span>
        <van-button size="small" color="#E54D42" round @click="sumit">提交订单</van-button>
      </div>
    </div>
    <!-- 配送时间的as -->
    <van-action-sheet v-model="show">
      <van-picker show-toolbar title="选择配送时间" :columns="columns" @confirm="deliverTime" />
    </van-action-sheet>
    <!-- 支付方式的as -->
    <van-action-sheet v-model="payShow">
      <van-picker show-toolbar title="选择支付方式" :columns="columnsPay" @confirm="payShowEvent" />
    </van-action-sheet>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      cardType: "add",
      currentContact: {
        name: "",
        tel: ""
      },
      value: "",
      show: false,
      payShow: false,
      deliverTimes: "选择配送时间",
      columnsPay: ["余额"]
    };
  },
  computed: {
    orderInfo() {
      return this.$route.params.data;
    },
    columns() {
      let allTime = [
        {
          text: "7:00~7:29"
        },
        {
          text: "7:30~7:59"
        },
        {
          text: "8:00~8:29"
        },
        {
          text: "8:30~8:59"
        },
        {
          text: "9:00~9:29"
        },
        {
          text: "9:30~9:59"
        },
        {
          text: "10:00~10:29"
        },
        {
          text: "10:30~10:59"
        },
        {
          text: "11:00~11:29"
        },
        {
          text: "11:30~11:59"
        },
        {
          text: "12:00~12:29"
        },
        {
          text: "12:30~12:59"
        },
        {
          text: "13:00~13:29"
        },
        {
          text: "13:30~13:59"
        },
        {
          text: "14:00~14:29"
        },
        {
          text: "14:30~14:59"
        },
        {
          text: "15:00~15:29"
        },
        {
          text: "15:30~15:59"
        },
        {
          text: "16:00~16:29"
        },
        {
          text: "16:30~16:59"
        },
        {
          text: "17:00~17:29"
        },
        {
          text: "17:30~17:59"
        },
        {
          text: "18:00~18:29"
        },
        {
          text: "18:30~18:59"
        },
        {
          text: "19:00~19:29"
        },
        {
          text: "19:30~19:59"
        },
        {
          text: "20:00~20:29"
        },
        {
          text: "20:30~20:59"
        }
      ];

      let date = new Date();
      let H = date.getHours();
      let F = date.getMinutes();
      let H1 = H - 7;
      let num = 0;
      if (H1 >= 0 && F > 29) {
        num = H1 * 2 + 1;
      } else if (H1 >= 0 && F <= 29) {
        num = H1 * 2;
      } else {
        num = 0;
      }
      let allTimeCount = allTime.slice(num);
      let src;
      if (allTimeCount.length > 0) {
        src = [
          {
            text: "今天",
            children: allTimeCount
          },
          {
            text: "明天",
            children: allTime
          }
        ];
      } else {
        src = [
          {
            text: "明天",
            children: allTime
          }
        ];
      }

      return src;
    }
  },
  created() {
    console.log(this.$route.params.data);
  },
  methods: {
    cardShow() {
      Dialog.alert({
        title: "温馨提示",
        message: "暂不支持此项功能！"
      }).then(() => {
        // on close
      });
    },
    deliverTime(values) {
      this.deliverTimes = values.join(" ");
      this.show = false;
    },
    payShowEvent(values) {
      this.payShow = false;
      console.log(values);
    },
    showListAddress() {
      //地址
      this.$router.push("/file/address");
    },
    sumit() {
      Dialog.alert({
        title: "温馨提示",
        message: "请先选择收货地址"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>

<style lang="less">
#order {
  background: #f1f1f1;
  .deliver {
    background: #fff;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 5px;
    .van-icon-arrow {
      color: #9699a6;
    }
    .deliver-title {
      display: flex;
      height: 45;
      line-height: 45px;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      border-bottom: 1px solid #eefeee;
      .left {
        flex: 2;
        color: #202020;
      }
      .right {
        flex: 1;
        display: flex;
        margin-right: -15px;
        align-items: center;
        font-size: 13px;
        span {
          color: #23884c;
          margin-right: 5px;
        }
      }
    }
    .deliver-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 60px;
        height: 60px;
      }
      .right {
        font-size: 12px;
        display: flex;
        margin-right: 13px;
        align-items: center;
        span {
          color: #787878;
        }
      }
    }
  }
  .remarks {
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    span {
      flex: 1;
      font-size: 15px;
      color: #333;
    }
    .van-field {
      flex: 9;
    }
  }
  .pay {
    margin-top: 10px;
    background: #fff;
    p {
      margin: 0;
    }
    .pay-style,
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 10px;
      font-size: 15px;
      color: #333;
      height: 45px;
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
        .van-icon {
          color: #a2a2a4;
          margin-left: 5px;
        }
      }
    }
    .card {
      border-top: 1px solid #eefeee;
      .right {
        span {
          font-size: 12px;
          color: #8799a3;
        }
      }
    }
  }
  .payment {
    background: #fff;
    margin-top: 10px;
    .item {
      display: flex;
      height: 45px;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      color: #333;
      font-size: 15px;
      padding: 0 25px 0 10px;
      border-top: 1px solid #eefeee;
      .second {
        color: #8799a3;
        font-size: 12px;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      color: #666;
      padding-left: 140px;
      .van-button {
        margin-left: 50px;
      }
    }
  }
}
</style>