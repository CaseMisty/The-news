<style scoped>
.div-rows {
  width: 100%;
  margin-bottom: 15px;
  overflow: hidden;
}
.div-label {
  width: 30%;
  float: left;
  text-align: right;
  box-sizing: border-box;
  padding-right: 15px;
  color: #686868;
  font-weight: bold;
  line-height: 2.2;
}
.form-right {
  float: left;
  width: 50%;
}
.form-right input {
  padding: 6px 12px;
  width: 100%;
}
.update-btn {
  color: #fff;
  background-color: #444;
  border-color: #444;
  display: block;
  padding: 8px 16px;
  border-radius: 18px;
}
</style>

<template>
  <div class="user-info">
    <div class="div-rows">
      <div class="div-label">头像</div>
      <div class="form-right">
        <input type="file">
      </div>
    </div>
    <div class="div-rows">
      <div class="div-label">城市</div>
      <div class="form-right">
        <input v-model="person_city" type="text">
      </div>
  </div>
    <div class="div-rows">
      <div class="div-label">QQ</div>
      <div class="form-right">
        <input v-model="person_qq" type="text">
      </div>
    </div>
    <div class="div-rows">
      <div class="div-label">保存修改</div>
      <div class="form-right">
        <button class="update-btn">修改</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'user-info',
    beforeCreate () {
      let self = this
      axios({
        method: 'post',
        url: 'http://localhost:6666/Psy/selectMassage.htm',
        params: {
          account: this.$route.query.account
        }
      }).then(function (res) {
        self.person_city = res.data.city
        self.person_qq = res.data.qq
        console.log(self.person_qq)
      }, function (err) {
        console.log(err)
        // alert('网络不好,或重新登录')
      })
    },
    data () {
      return {
        person_city: '',
        person_qq: ''
      }
    }
  }
</script>
