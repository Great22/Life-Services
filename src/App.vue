<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../src/components/footer/Footer";
import { Dialog } from "vant";
export default {
  components: {
    Footer
  },
  name: "App",
  methods: {
    // 判断移动端还是pc端
    // <!--_isMobile方法-->
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted: function() {
    if (!this._isMobile()) {
      Dialog.confirm({
        title: "温馨提示",
        message: "请在手机端查看"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style  scoped lang="less">

.v-enter {
  opacity: 0;
  transform: translateX(100%);
  /* position: absolute; */
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
