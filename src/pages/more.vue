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
    span.active a {
      font-weight: bold;
      color: #222;
    }
    a {
      color: #888;
      margin-left: 10px;
      line-height: 30px;
      font-size: 12px;
    }
}
.category-container {
  text-align: right;
  width: 70%;
}
</style>

<template>
  <div>
    <div class="container clearfix">
      <div style="padding-left: 15px; padding-right: 15px;" class="clearfix">
        <h1 class="pageHeader clearfix">
          {{title}}
          <div class="category-container right">
            <a v-for="item of category" :key="item.id" :class="{'active': activeId==item.id}" :href="item.href" @click.prevent="getArticleByCateId(item.id, item.name)">{{item.name}}</a>
          </div>
        </h1>
      </div>
      <div class="clearfix">
        <div class="left" style="width: 687px;">
          <div class="clearfix">
            <showcase size="large" v-if="first" :data="first"></showcase>
          </div>
          <div class="clearfix">
            <template v-if="others">
              <showcase  v-for="item of others" :data="item" :key="item.id"></showcase>
            </template>
          </div>
        </div>
        <div class="right">
          <a href="http://shop124260606.taobao.com" target="_blank">
            <img data-no-retina="" class="img-responsive centerBlock" src="https://alioss.g-cores.com/assets/store-bb9f4136d59f065f77157e5581e0ea982dca4284afc2465632fd2a4f455d3aee.jpg" alt="">
          </a>
        </div>
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
  props: {
    utype: {
      default: ''
    },
    id: {default: null}
  },
  computed: {
    moreType () {
      return this.$store.state.moreType
    }
  },
  watch: {
    moreType (newval) {
      if (newval) this.type = newval
    },
    type (newType) {
      this.getContent()
    },
    id (val) {
      this.$message(val)
    }
  },
  created () {
    this.getContent()
    this.$root.eventHub.$on('reloadArticles', this.getArticles)
  },
  data () {
    return {
      title: '',
      category: [],
      first: new EmptyPress(),
      others: null,
      activeId: undefined,
      type: this.utype
    }
  },
  methods: {
    getArticles () {
      this.title = '文章'
      this.$http.get('/api/getCategories.htm')
      .then(res => {
        this.category = res.data
      })
      this.$http.get('/api/getArticles.htm')
      .then(res => {
        if (res.data.length) {
          this.first = res.data.shift()
          this.others = res.data
          console.dir(this.first)
          console.dir(this.others)
        } else {
          this.$message('暂无此类文章')
          this.first = new EmptyPress()
          this.others = null
        }
      })
    },
    getArticleByCateId (id, name) {
      this.$http({
        method: 'post',
        url: `/api/getArticleByCateId.htm`,
        params: { id }
      })
      .then(res => {
        this.title = `${name} | 文章`
        this.activeId = id
        if (res.data.length) {
          this.first = res.data.shift()
          this.others = res.data
          console.dir(this.first)
          console.dir(this.others)
        } else {
          this.$message('暂无此类文章')
          this.first = new EmptyPress()
          this.others = null
        }
      }, err => {
        console.log(err)
      })
    },
    getContent () {
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
      this.first = new EmptyPress()
      this.others = null
      this.category = []
      if (this.type === 'news') {
        this.title = '新闻'
        ajax('get', '/api/selectNewsPage.htm')
        .then(res => {
          this.first = res.shift()
          this.others = res
          this.category = []
        })
      }
      if (this.type === 'articles') {
        this.getArticles()
      }
    }
  }
}
</script>

