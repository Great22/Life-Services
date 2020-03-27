<template>
  <div class="goodslist">
    <div class="goods-list-item">
      <goods-item :item="item" class="item" v-for="(item,index) in newLists" :key="index"></goods-item>
    </div>
    <van-pagination
      v-model="currentPage"
      :total-items="likeLists.length"
      @change="pageChange"
      :show-page-size="3"
      force-ellipses
    />
  </div>
</template>
<script>
import GoodsItem from "../home/goodsItem";
export default {
  components: {
    "goods-item": GoodsItem
  },
  data() {
    return {
      likeLists: [],
      currentPage: 1
    };
  },
  created() {
    this.getLikesLists();
  },
  computed:{
    newLists(){
      return this.likeLists.slice((this.currentPage-1)*10,(this.currentPage-1)*10+10)
    }
  },
  methods: {
    getLikesLists() {
      this.$http.get("../../../static/staticData/home/goods.json")
      .then(res => {
        if (res.status == 200) {
          this.likeLists = res.data.result;
        }
      });
    },
    pageChange(newPages) {
      // console.log(this.currentPage);
    }
  }
};
</script>
<style lang="less" scoped>
.goodslist {
  .goods-list-item {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
    box-sizing: border-box;
  }
}
</style>