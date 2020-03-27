<template>
  <div class="Register">
    <van-nav-bar title="注册" left-arrow></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="userinfo.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userinfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="userinfo.repassword"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写确认密码' }]"
      />
      <van-field
        v-model="userinfo.phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field v-model="userinfo.sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary" @click="sendSms" :disabled="disabled">{{title}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      title: "发送验证码",
      disabled: false,
      userinfo: {
        userinfo: "",
        password: "",
        repassword: "",
        sms: "",
        phone: ""
      }
    };
  },
  methods: {
    onSubmit() {},
    sendSms() {
      Toast("验证码已发送.");
        var count = 120;
        this.disabled = !this.disabled;
        let timer = setInterval(() => {
          this.title = `${count}s后，再试`;
          count--;
          if (count < 1) {
            clearInterval(timer);
            this.title = "发送验证码";
            this.disabled = false;
          }
        }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
</style>