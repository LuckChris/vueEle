<template lang='pug'>
.login-page
  .login-contanier
    head-top(:head-title = "loginWay ? '短信登录' :'密码登录'", :goBack="true")
    .login-up-container(v-if='loginWay')
      van-cell-group
        van-field( label="账号" name='phone' maxlength='11' v-model='phoneNumber'  placeholder="请输入您的手机号码" clearable)
        van-field( label="验证码"  placeholder="请输入短信验证码" clearable)
          van-button(slot='button',size='small' type="primary" v-if='!computedTime' @click.prevent='getVerifyCode') 发送验证码
          van-button(slot='button',size='small' plain disabled  type="primary" v-else) 重新发送{{computedTime}}s
    .login-in-container(v-else)
      van-cell-group
        van-field( label="账号"  clearable placeholder="请输入您的账号" v-model.lazy='userAccount'  required)
        van-field( label="密码"  placeholder="请输入您的密码", v-model='password' clearable required)
        van-field.verify-code( label="验证码" maxlength='4'
                  placeholder="请输入验证码" v-model='codeNumber'  required)
      .verify-pic
        .change-image
          .left-image(v-if='captchaCodeImg')
            img.change-img(:src='captchaCodeImg')
          .right-text(@click='getCaptchaCode')
            p 看不清
            p 换一张
    .login-tips
      p 温馨提示：未注册过的账号，登录时将自动注册
      p 注册过的用户可凭账号密码登录
    .button-container.text-white
      .button-wrapper
        button(:class="canSubmit? 'primaryStyle':'defaultStyle'" @click='loginMobile') 登录
    .change-login(@click='changeLoginWay') {{loginWay?'使用密码登录':'使用短信验证码登录'}}
</template>
<script>
import headTop from '@/components/header'
import { Field, CellGroup, Switch, Button, Toast } from 'vant'
import {getcaptchas, mobileCode, accountLogin} from '@/service/getDate'
export default {
  data () {
    return {
      loginWay: false, // 登录方式默认短信登录
      showPassword: false, // 是否显示密码
      password: '', // 密码
      userAccount: '', // 账号
      captchaCodeImg: '', // 图片验证码
      computedTime: 0, // 倒计时
      phoneNumber: '', // 电话号码
      codeNumber: '',
      userInfo: null

    }
  },
  components: {
    headTop,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Switch.name]: Switch,
    [Button.name]: Button

  },
  watch: {

  },
  computed: {
    vertifyPhoneNumber () {
      return /^1\d{10}$/gi.test(this.phoneNumber)
    },
    vertifyMobileCode () {
      return /^\d{6}$/gi.test(this.mobileCode)
    },
    canSubmit () {
      if (this.userAccount && this.password && (this.codeNumber.length === 4)) {
        return true
      }
    }

  },
  created () {
    this.getCaptchaCode()
  },
  methods: {
    // 获取图片验证码
    async getCaptchaCode () {
      let res = await getcaptchas()
      this.captchaCodeImg = res.code
    },
    // 改变登录方式
    changeLoginWay () {
      this.loginWay = !this.loginWay
    },
    // 获取短信验证码
    async getVerifyCode () {
      if (this.vertifyPhoneNumber) {
        this.computedTime = 60
        this.timer = setInterval(() => {
          this.computedTime--
          if (this.computedTime === 0) {
            clearInterval(this.timer)
          }
        }, 1000)
        // 判断用户是否已经注册过
        // let exsis = await checkExsis(this.phoneNumber, 'mobile')
        // console.log(exsis)
        let res = await mobileCode(this.phoneNumber)
        if (res.message) {
          Toast('短信已发送')
        }
      } else {
        Toast('手机号码不能为空')
      }
    },
    async loginMobile () {
      if (this.loginWay) {
        if (!this.vertifyPhoneNumber) {
          Toast('手机号码输入不正确')
        } else if (!this.vertifyMobileCode) {
          Toast('验证码不正确')
        }
      } else {
        if (!this.userAccount) {
          Toast('请输入手机号/用户名/邮箱')
        } else if (!this.password) {
          Toast('请输入密码')
        } else if (!this.codeNumber) {
          Toast('请输入验证码')
        }
        this.userInfo = await accountLogin(this.userAccount, this.password, this.codeNumber)
      }

      if (!this.userInfo.user_id) {
        Toast(this.userInfo.message)
        if (!this.loginWay) {
          this.getCaptchaCode()
        }
      } else {
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  @import '../../style/mixin';
.login-contanier{
  padding-top: 2rem;
  font-size: .7rem;
  .change-login{
   font-size: .45rem;
   color: #3b95e9;
   padding-top: 1rem;
   text-align: center;
  }
  .login-in-container{
    .verify-code{
      position: relative;
    }
    .verify-pic{
      position: absolute;
      top: 6rem;
      right: .4rem;
      font-size: .45rem;
      .change-image{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left-image{
          .change-img{
            width: 2.4rem;
            padding-right: .4rem;

          }

        }
         .right-text{
           p{
             @include sc(.55rem, #666);
           }
           p:last-child{
             color: #3b95e9;
             margin-top: .1rem;

           }
         }
      }

    }
    }
    .login-tips{
      padding-top: .6rem;
      p{
        @include sc(.5rem, red);
        padding:.4rem .6rem;
        line-height: .3rem;
      }
      p:last-child{
        text-indent: 2.6rem;

      }
      padding-bottom: .8rem;
    }
    .button-container{
      width:100%;
      height: 44px;
      .button-wrapper{
        width:345px;
        height: 44px;
        margin:  0 auto;
      }
     button{
        width:345px;
        height: 44px;
        outline: none;
        border: none;
        border-radius: 23px;
      }
      .primaryStyle{
        background-color: #4cd964;
      }
      .defaultStyle{
        background-color: lightgray;
      }

    }
}

</style>
