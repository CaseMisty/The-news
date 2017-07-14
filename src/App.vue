<style lang="scss">
  .container {
    margin: 0 auto;
    width: 1030px;
  }
  * {
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    text-align: left; // color: #2c3e50;
    margin: 0;
    padding: 0;
    border: 0;
    list-style-type: none;
    box-sizing: border-box!important;
  }
  html,
  body {
    width: 100%;
  }
  .main-view {
    padding-top: 80px;
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
  .clearfix::after {
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
    visibility: hidden;
  }
  .left {
    float: left;
  }
  .middle {
    margin: 0 auto;
  }
  .right {
    float: right;
  }
  .block {
    display: block;
  }
</style>

<template>
  <div id="app">
    <headerCom></headerCom>
    <div class="main-view">
      <router-view></router-view>
    </div>
    <siteFooter></siteFooter>
  </div>
</template>

<script>
  import headerCom from './components/header'
  import siteFooter from './components/footer.vue'
  export default {
    components: {
      headerCom,
      siteFooter
    },
    name: 'app'
  }
</script>
