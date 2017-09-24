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
.left-nav .active {
  background-color: #e0e0e0;
}
</style>

<template>
  <div class="person-info" v-title="'个人设置'">
    <div class="person-left">
      <div class="person-left">
        <div class="user-head">
          <img :src="person.authorImg" alt="头像">
          <br>
          <small>{{person.nickName}}</small>
        </div>
        <ul class="left-nav">
          <li :class="{active: index==0}">
            <a href="#/personInfo/userInfo" @click="index=0">
              用户信息
            </a>
          </li>
          <li :class="{active: index==1}">
            <a href="#/personInfo/userNews" @click="index=1">
              我的文章
            </a>
          </li>
          <li :class="{active: index==2}" @click="index=2">
            <a href="#/contribution">
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
  import axios from 'axios'
  export default {
    beforeCreate () {
      let self = this
      axios({
        method: 'post',
        url: 'http://localhost:9090/Psy/selectMassage.htm',
        params: {
          account: this.$route.query.account
        }
      }).then(function (res) {
        self.person = res.data
      }, function (err) {
        console.log(err)
        // alert('网络不好,或重新登录')
      })
    },
    data () {
      return {
        person: null,
        index: 0
      }
    }
  }
</script>
