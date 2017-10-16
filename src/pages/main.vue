<style lang="scss">

</style>

<template>
  <div class="main">
    <slide></slide>
    <div class="container clearfix" style="padding-top: 20px;">
      <showcase-article :data="firstArticle" size="middle"></showcase-article>
      <showcase-article :data="secondArticle" size="middle"></showcase-article>
      <showcase-group :items="RestArticle"></showcase-group>
    </div>
    <banner cnName="新闻" enName="NEWS" id="news" imgSrc="http://alioss.g-cores.com/assets/banner/gadio-f7ed3e007552777820b9f5ffd892937cae37273efaf60593ea09e6abd851743e.jpg"></banner>
    <showcase-group :items="news" more="news"></showcase-group>
    <banner cnName="文章" enName="ARTICLE" id="articles" imgSrc="http://alioss.g-cores.com/assets/banner/article-e0042f16e46a464ef52cadd25f3cb7a5e5d6472467f5be6a3a357b9e355637ca.jpg"></banner>
    <showcase-group :items="articles" more="articles"></showcase-group>
  </div>
</template>

<script>
/*eslint-disable */
import showcaseArticle from '../components/showcase-article'
import slide from '../components/slide'
import axios from 'axios'
import banner from '../components/banner'
import showcaseGroup from '../components/showcaseGroup'
import EmptyPress from '../components/EmptyPress'
export default {
  components: {
    showcaseArticle,
    slide,
    banner,
    showcaseGroup
  },
  data () {
    return {
      firstArticle: new EmptyPress(),
      secondArticle:  new EmptyPress(),
      RestArticle:  [new EmptyPress()],
      news:  [new EmptyPress()],
      articles:  [new EmptyPress()]
    }
  },
  created () {
    let self = this
    axios({
      method: 'post',
      url: '/api/selectAllPress.htm'
    }).then(function (res) {
      self.firstArticle = res.data.shift()
      self.secondArticle = res.data.shift()
      self.RestArticle = res.data
    }, function (err) {
      console.log(err)
    })
    this.$http.post('/api/selectAllNews.htm')
    .then((res) => {
      this.news = res.data
    }, (err) => {
      this.$message.error(err)
    })
    this.$http.post('/api/selectAllArticle.htm')
    .then((res) => {
      this.articles = res.data
    }, (err) => {
      this.$messsage.error(err)
    })
  },
  methods: {
  }
}
</script>
