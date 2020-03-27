<template>
  <div class="login">
    <van-nav-bar title="登录"  left-arrow @click-left="goBack()"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="usernameRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="passwordRules"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 还没有号，去注册 -->
    <div class="go-register">
      <span>还没有号?</span>
      <router-link to="/register">去注册</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordRules: [{ required: true, message: "请填写密码" }],
      usernameRules: [{ required: true, message: "请填写用户名" }]
    };
  },
  methods: {
    onSubmit() {
        console.log(this.username)
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.login {
    background:#fff;
  .go-register {
    box-sizing: border-box;
    padding: 0 10px;
    font-size:16px;
    align-items: center;
    display: flex;
    span{
        margin-right: 10px;
    }
  }
}
</style>