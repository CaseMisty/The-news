<style lang="scss">
body{
  font-family: "Open Sans", "Helvetica Neue", Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color:#292b2c;
  background: #f7f7f7;
}
#login{
  padding: 100px 10px 20px;
  max-width: 270px;
  margin: 0 auto 80px;
}
.logo{
  text-align: center;
}
.content{
  padding:30px 0 0;
}
form{
  display: block;
  margin-top: 0em;
}
input{
  overflow: hidden;
  font: 13.3333px Arial;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
}
.form-group{
  margin-bottom: 1rem;
}
.form-control{
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  box-sizing: border-box;
}
.form-check{
  position: relative;
  display: block;
  margin-bottom: 0.5rem;
}
.form-check-lable{
  padding-left: 1.5rem;
  margin-bottom: 0;
  cursor:pointer;
}
.form-check-input{
  margin-right: 5px;
  margin-top: .22rem;
  position:absolute;
  margin-top: 0.25rem;
  margin-left: -1.25rem;
}
.pull-right{
  float:right;
}
a{
  color:#757575;
  text-decoration: none;
}
a.text-muted{
  color:#636c72;
}
a:hover{
  text-decoration: underline;
  cursor:auto;
}
.text-center{
  text-align: center;
}
button{
  text-transform: none;
  overflow: visible;
  margin: 0;
  -webkit-appearance: button;
}
.btn-markness{
  color:#fff;
  background-color:#d9534f;
  border-color: #d9534f;
}
.btn-block{
  display:block;
  width:100%
}
.btn{
  display: inline-block;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border:1px solid transparent;
  font-size: 0.875rem;
  padding:0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
</style>

<template>
  <div id="login">
    <div class="logo">
      <img src="static/g.png">
    </div>
    <div class="content">
      <div class="form-group">
        <input v-model="userName" type="text" class="form-control" value placeholder="电话/邮箱/用户名" v-focus="userNameFocusState">
      </div>
      <div class="form-group">
        <input v-model="passWord" type="password" class="form-control" value placeholder="密码" v-focus="passwordFocusState">
      </div>
      <div class="form-group">
        <a href="javascript:;" class="pull-right">
          <small>找回密码</small>
        </a>
        <div class="form-check" style="overflow:hidden">
          <lable class="form-check-lable">
            <input type="checkbox" name="remember" class="form-check-input" value v-model="rememberMe">
            <small>记住我</small>
          </lable>
        </div>
      </div>
      <div class="form-group">
        <button v-on:click="loginTest" type="button" class="btn btn-markness btn-block">登录</button>
      </div>
      <div class="form-group text-center">
        <a href="#" class="text-muted">
          <small>使用社交平台账号登录</small></a>
        <br>
        <a href="#" class="text-muted">
          <small>注册账号</small>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      userName: '141203405',
      passWord: 'qcc',
      rememberMe: true,
      userNameFocusState: false,
      passwordFocusState: false
    }
  },
  methods: {
    /**
     * 登录判断
     *
     * @return {undefined} 无返回值
     */
    loginTest () {
      if (this.userName === '') {
        this.$message.error('用户名不能为空')
        this.userNameFocusState = true
        setTimeout(() => { this.userNameFocusState = false }, 500)
        return
      }
      if (this.passWord === '') {
        this.$message.error('密码不能为空')
        this.passwordFocusState = true
        setTimeout(() => { this.passwordFocusState = false }, 500)
        return
      }
      // 这里ajax登录
      let self = this
      axios({
        url: 'http://localhost:6666/Psy/login.htm',
        method: 'post',
        params: {
          userAccount: self.userName,
          userPassword: self.passWord
        }
      }).then(function (res) {
        if (res.data === '1') {
          // 这里要有登录等待
          window.location.href = '/#/personInfo?account=' + self.userName
        } else {
          self.$message.error('用户名或密码错误')
        }
      })
    }
  },
  directives: {
    focus: {
      update (el, binding) {
        if (binding.value) el.focus()
      }
    }
  }
}
</script>
