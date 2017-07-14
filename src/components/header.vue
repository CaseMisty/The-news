<style scoped>
  .header {
    width: 100%;
    color: rgb(153, 153, 153);
    background: rgba(255,255,255,0.95);
    font-size: 14px;
    position: fixed;
    z-index: 1;
  }
  .header-inner {
    width: 1030px;
    height: 80px;
    margin: 0 auto;
  }
  .sLogo {
    box-sizing: border-box;
    font-size: 22px;
    padding: 23.5px 15px;
    padding-right: 10px;
    height: 80px;
  }
  .logo {
    height: 80px;
    padding: 23.5px 15px;
    padding-left: 0;
    box-sizing: border-box;
  }
  .login-div div {
    height: 100%;
    padding: 28.5px 15px;
  }
  .nav {
    height: 100%;
    padding: 28.5px 15px;
  }
  a {
    color: rgb(153, 153, 153);
  }
</style>

<template>
  <header class="header">
    <div class="header-inner">
      <a href="#/">
        <img class="sLogo left" src="static/sLogo.png" alt="logo">
        <img class="logo left" src="static/logo.png" alt="logo">
      </a>
      <div class="login-div right">
        <div class="left">
          <a href="#/login">登录</a>
        </div>
        <div class="left">
          <a href="">注册</a>
        </div>
      </div>
      <ul class="nav right">
        <li>
          <a href="">新闻</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>
