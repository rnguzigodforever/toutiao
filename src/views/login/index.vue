<template>
<div class="my-container">
  <img src= "~@/assets/state1.png" alt="" class="back">
<van-nav-bar
class="page-nav-bar"
  title="登录"
  left-arrow
/>
<!-- 导航栏 -->
<!-- 登陆表单 -->
<van-form @submit="onSubmit" ref="loginForm">
  <van-field
    v-model="user.mobile"
    label="手机号"
    placeholder="请输入手机号"
    :rules="userFormRules.mobile"
    maxlength="11"
    type="number"
  > <i slot="left-icon" class='font_family icon-yanzhengma'></i>

  </van-field>
  <van-field
    v-model="user.code"
    label="验证码"
    placeholder="请输入验证码"
    :rules="userFormRules.code"
    maxlength="6"
  > <i slot="left-icon" class='font_family icon-lishi'></i>
    <template #button native-type="button">
      <van-count-down :time="time" format=" ss s"  v-if="codeAble"  @finish="finish"/>

    <van-button size="small" type="primary" native-type="button" @click="submitCode" v-else >发送验证码</van-button>
  </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit"  @submit="onSubmit">
      提交
    </van-button>
  </div>
</van-form>
</div>
</template>

<script >
import { login, getCode } from '@/api/user.js'

export default {
  data () {
    return {
      user: {
        mobile: 13911111111,
        code: '246810'
      },
      time: null,
      codeAble: false,
      userFormRules: {
        mobile: [{ required: true, message: '请填写手机号' }, { pattern: /1[1|3|5|7|8]\d{9}$/, message: '请输入正确的手机号' }],
        code: [{ required: true, message: '请填写验证码' }, { pattern: /\d{6}$/, message: '请输入正确的验证码' }]

      }
    }
  },
  methods: {
    async onSubmit () {
      const user = this.user
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      console.log(user)
      try {
        const res = await login(user)
        console.log('登录成功', res.data.data)
        this.$store.commit('saveUser', res.data.data)
        this.$toast.success('登录成功')
        this.$router.push('/')
      } catch (err) {
        if (err.response.status === 400) {
          console.log('登陆失败', err)
          this.$toast.fail('登录失败')
        }
      }
    },
    async submitCode () {
      const pattern = /1[1|3|5|7|8]\d{9}$/
      console.log(pattern.test(this.user.mobile))
      if (!pattern.test(this.user.mobile)) {
        this.$toast({
          message: '请输入正确手机号',
          duration: 1000
        })
        return false
      }
      // this.residue = 60
      // setTimeout(() => { this.codeAble = false }, 60000)
      // var timer = setInterval(() => {
      //   this.residue--
      //   if (this.residue <= 0) {
      //     clearInterval(timer)
      //     this.residue = '发送验证码'
      //   }
      // }, 1000)
      const mobile = this.user.mobile
      try {
        const res = await getCode(mobile)
        console.log('发送成功', res)
        this.time = 1000 * 60
        this.codeAble = true
      } catch (err) {
        if (err.response.status === 429) {
          console.log('发送失败', err)
          this.$toast('请求次数过多,请稍后再试')
        }
      }
    },
    finish () {
      this.codeAble = false
    }
  }
}
</script>

<style lang='less' scoped>
.my-container  {
  height: 100vh;
  width: 100vw;
  .back{
    opacity: 0.4;
  position: absolute;
height: 100%;

  }
.van-form{
  .van-field{
  background: none !important;
  }

}
}
.font_family{
  font-size: 30px;
}
</style>
