<template>
  <div class="user-details">
      <van-nav-bar title="个人信息"  left-arrow></van-nav-bar>
      <div class="details">
          <div class="item">
              <span>头像</span>
             <p> <img src="../../../static/imgs/1.jpg" alt=""></p>
          </div>
          <div class="item">
              <span>昵称</span>
               <p>勇士</p>
          </div>
          <div class="item">
              <span>id号</span>
               <p>199-000-88-1234567890</p>
          </div>
          <div class="item">
              <span>手机号</span>
               <p>182xxxx0000</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.user-details{
    min-height:667px;
     background: #f1f1f1;
   .details{
       color:#546566;
        .item{
       background:#fff;
        box-sizing: border-box;
       display:flex;
       align-items: center;
       justify-content: space-between;
       margin-top: 10px;
       padding:0 10px;
        span{
       flex:2;
       }
       p{
           flex:4;
           text-align: right;
           margin-right: 5px;
           img{
               width:60px;height:60px;
           }
       }
       }
   }
}
</style>