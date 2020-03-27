<template>
  <div class="file-list" @click="goNext">
    <div class="list-left">
      <van-icon :name="name" size="18px" :color="color" />
      <span>{{text}}</span>
    </div>
    <van-icon name="arrow" size="14px" color="#c6c6c6" />
  </div>
</template>
<script>
import { Dialog ,Toast} from "vant";
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String
    },
    text: {
      type: String
    },
    color: {
      default: "rgb(118, 211, 72)"
    },
    clickText: {
      type: String
    }
  },
  methods: {
    goNext() {
      switch (this.clickText) {
        case "address":
          this.$router.push("/file/" + this.clickText);
          break;
        case "friends":
        case "phone":
          Dialog.confirm({
            title: "温馨提示",
            message: "暂不支持此项业务,去shopping"
          })
            .then(() => {
              this.$router.push("/");
            })
            .catch(() => {
              // on cancel
            });
          break;
        case "coupon":
          Dialog.confirm({
            title: "温馨提示",
            message: "去博主github上看看，再瞧瞧？",
            confirmButtonText: "go github"
          })
            .then(() => {
              window.location.href = "https://github.com/Great22";
            })
            .catch(() => {
              // on cancel
            });
          break;
        default:
          Toast.loading({
            message: "加载中...",
            forbidClick: true,
            loadingType: "spinner"
          });
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.file-list {
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  line-height: 40px;
  height: 40px;
  .list-left {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
      color: #8799a3;
    }
    .van-icon-friends-o,
    .van-icon-circle-o,
    .van-icon-idcard,
    .van-icon-phone-circle-o,
    .van-icon-label-o {
      font-weight: bolder;
    }
  }
}
</style>