<template>
    <div class="vip"  @click="goVip">
     <van-icon name="diamond-o" />
     <p  class="center">加入绿卡会员·预计每年节省806元</p>
     <p  class="right">
       <span>5折开卡</span>
       <van-icon name="arrow"></van-icon>
     </p>
   </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
     methods:{
         goVip(){
             this.$router.push("/vip")
              }
     }
}
</script>

<style lang="less" scoped>
    .vip{
   display: flex;
   height:40px;
   background-color:#3db762;
   justify-content: center;
   margin:0 5px;
   align-items: center;
   border-radius: 10px;
   color:#fff;
   font-size: 12px;
    .van-icon-diamond-o{
      color:#F9E974;
      font-size: 24px;
      margin-left: 5px;
    }
   .center{
    flex:3;
   text-align: center;
    } 
   .right{
    display:flex;
     align-items: center;
     margin-right: 5px;
   }
  }
</style>