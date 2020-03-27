<template>
  <div class="comment-list">
        <div class="title">
            <p>评论</p>
        </div>
      <div class="comment-item">
         <div class="item-img">
               <img src="../../static/imgs/mickey.jpg" alt="">
         </div>
         <div class="item-content">
              <div class="username">
                  <span class="name">用户名</span>
                  <span>2020-03-19 13:41:07</span>
              </div>
              <van-rate v-model="value" />
              <div class="content">
                  很满意，不错！很满意，不错！很满意，不错！很满意，不错！很满意，不错！很满意，不错！
              </div>
         </div>
      </div>
      <div class="comment-item">
         <div class="item-img">
               <img src="../../static/imgs/mickey.jpg" alt="">
         </div>
         <div class="item-content">
              <div class="username">
                  <span class="name">用户名</span>
                  <span>2020-03-19 13:41:07</span>
              </div>
              <van-rate v-model="value" />
              <div class="content">
                  很满意，不错！很满意，不错！很满意，不错！很满意，不错！很满意，不错！很满意，不错！
              </div>
         </div>
      </div>
      <div class="btn">
          <van-button round size="small" >查看更多(630)</van-button>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            value: 3            
        }
    },
    // 
    mounted(){
        },
    methods:{
        // 如果有数据,根据传过来的id,渲染评论列表
    }
}
</script>
<style lang="less" scoped>
   .comment-list{
       margin-top:10px;
       box-sizing: border-box;
       background: #fff;
       padding:5px 0;
         .title{
             color:#2f2f2f;
             font-size:14px;
             font-weight: bolder;
             padding-left:9px;
              margin-top: 5px;
            p{
            margin:0;
            height:20px;
            line-height: 20px;
           }
       }
         .btn{
            text-align: center;
         }
        .comment-item{
             padding:5px;
             display: flex;
             justify-content: center;
             .item-img{
                 flex:3;
                 img{
                 width:50px;
                 height:50px;border-radius:50%;
                 }
             }
             .item-content{
                 flex:17;
                 padding:0 5px;
                 font-size:12px;
                .username{
                    display: flex;
                    justify-content: space-between;
                    color:#9a9a9a;
                    
                    .name{
                        color:#252525;
                    }
                 }  
                 .content{
                     color:#29292b;
                 }  
                 .van-rate{
                     margin:5px 0;
                 }             
             }
         }
   }
</style>