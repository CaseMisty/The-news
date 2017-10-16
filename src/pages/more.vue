<style lang="scss" scoped>
.pageHeader {
    font-size: 18px;
    line-height: 30px;
    padding: 8.5px 0px;
    margin: 46px 0 23px;
    border: 1px solid #f0f0f0;
    border-left: none;
    border-right: none;
    color: #808080;
    font-weight: normal;
    text-align: left;
}
</style>

<template>
  <div>
    <div class="container clearfix">
      <div style="padding-left: 15px; padding-right: 15px;">
        <h1 class="pageHeader">{{title}}</h1>
      </div>
      <div class="clearfix">
        <showcase size="middle" :data="first"></showcase>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import showcase from '../components/showcase-article'
import EmptyPress from '../components/EmptyPress'
export default {
  components: {
    showcase
  },
  data () {
    return {
      title: '',
      category: [],
      first: new EmptyPress(),
      others: new EmptyPress()
    }
  },
  created () {
    let ajax = function (method, url, data) {
      var xmlhttp
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
      }
      return new Promise(function (resolve, reject) {
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
              resolve(JSON.parse(xmlhttp.responseText))
            } else {
              reject(xmlhttp.status)
            }
          }
        }
        xmlhttp.open(method, url)
        xmlhttp.send(data)
      })
    }
    if (this.$route.params.type) {
      if (this.$route.params.type === 'news') {
        this.title = '新闻'
        ajax('get', '/api/selectNewsPage.htm')
        .then(res => {
          this.first = res.shift()
          this.others = res
          this.category = []
        })
      }
      if (this.$route.param.type === 'articles') {
        this.title = '文章'
      }
    }
  }
}
</script>

