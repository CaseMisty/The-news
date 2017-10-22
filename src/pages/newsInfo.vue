<style lang="scss">

</style>

<template>
  <div class="newsInfo" v-title="bannerData.title">
    <ArticleBanner :data="bannerData"></ArticleBanner>
    <ArticleContent :data="contentData"></ArticleContent>
  </div>
</template>

<script>
import ArticleBanner from '../components/article/banner'
import ArticleContent from '../components/article/content'
import axios from 'axios'

export default {
  components: {
    ArticleBanner,
    ArticleContent
  },
  data () {
    class PressData {
      constructor () {
        this.title = ''
        this.brief = ''
        this.lastTime = ''
        this.titleImage = ''
        this.authorImg = ''
      }
    }
    return {
      bannerData: new PressData(),
      contentData: new PressData()
    }
  },
  beforeCreate () {
    let self = this
    axios({
      method: 'post',
      url: '/api/selectOnePress.htm',
      params: {
        id: this.$route.query.press_id
      }
    }).then(function (res) {
      self.bannerData = res.data
      self.contentData = res.data
    }, function (err) {
      console.log(err)
      // alert('网络不好,或重新登录')
    })
  }
}
</script>
