
<template>
  <div class="chosen-container">
    <div class="chosen-swiper">
      <a href="ticketDetail.html">
        <p class="name">壳牌加油</p>
        <p class="money">
          20
          <span>元</span>
        </p>
        <p class="explain">20元无门槛优惠券</p>
      </a>
      <a href="ticketDetail.html">
        <p class="name">壳牌加油</p>
        <p class="money">
          20
          <span>元</span>
        </p>
        <p class="explain">20元无门槛优惠券</p>
      </a>
      <a href="ticketDetail.html">
        <p class="name">壳牌加油</p>
        <p class="money">
          20
          <span>元</span>
        </p>
        <p class="explain">20元无门槛优惠券</p>
      </a>
      <a href="ticketDetail.html">
        <p class="name">壳牌加油</p>
        <p class="money">
          20
          <span>元</span>
        </p>
        <p class="explain">20元无门槛优惠券</p>
      </a>
    </div>
  </div>
</template>

<script>
// 引入插件
import BScroll from "better-scroll";
import goodsItem from "../components/home/goodsItem";

export default {
  components: {
    "goods-item": goodsItem
  },
  name: "Detter",
  data() {
    return {
      hotLists: []
    };
  },
  methods: {
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
    // 初始化
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.rampage, {
          startX: 0,
          click: true,
          scrollX: true,
          // 忽略竖直方向的滚动
          scrollY: false,
          eventPassthrough: "vertical"
        });
      } else {
        this.scroll.refresh();
      }
    },

    // 计算宽度
    _calculateWidth() {
      // 获取类名为 rampage-list 的标签
      let rampageList = this.$refs.rampageChild.getElementsByClassName(
        "rampage-list"
      );
      // 设置一个起始宽度
      let initWidth = 0;
      // 遍历标签
      for (let i = 0; i < rampageList.length; i++) {
        const item = rampageList[i];
        // 将每一个标签宽度相加
        initWidth += item.clientWidth;
      }
      // 设置可滚动的宽度
      this.$refs.rampageChild.style.width = `${initWidth}px`;
    }
  },
  created() {
    this.getHot();
  },
  mounted() {
    /**
     * 横向滚动
     */
    // 第一种方法
    // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
    this.$nextTick(() => {
      // 初始化
      this._initScroll();
      // 计算宽度
      this._calculateWidth();
    });
  }
};
</script>

<style scoped  lang="less">

</style>

