<style lang="scss">
.user-head {
  width: 100%;
  padding: 40px 0 20px;
  text-align: center;
}
.user-head img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.user-head small {
  font-size: 12px;
}
.left-nav li {
  width: 100%;
  text-align: center;
  padding: 10px;
}
.left-nav li:hover {
  color: #626262;
  background: #e0e0e0;
  cursor: pointer;
}
.person-info {
  background: #f7f7f7;
  overflow: hidden;
  height: 600px;
}
.person-left {
  width: 270px;
  height: 100%;
  background: #eeeef0;
  color: #888;
  float: left;
}
.person-right {
  width: calc(100% - 270px);
  float: left;
  padding: 20px;
  box-sizing: border-box;
}
.left-nav a {
  color: #888;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>

<template>
  <div class="person-info">
    <div class="person-left">
      <div class="person-left">
        <div class="user-head">
          <img src="static/user-head.png" alt="头像">
          <br>
          <small>Qcccc</small>
        </div>
        <ul class="left-nav">
          <li>
            <a href="#/personInfo/userInfo">
              用户信息
            </a>
          </li>
          <li>
            <a href="#/personInfo/userNews">
              我的文章
            </a>
          </li>
          <li>
            <a href="">
              我要投稿
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="person-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>
