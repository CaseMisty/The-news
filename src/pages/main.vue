<style lang="scss">

</style>

<template>
  <div class="main">
    <slide></slide>
    <div class="container clearfix" style="padding-top: 20px;">
      <showcase-article :data="firstArticle" :size="'middle'"></showcase-article>
      <showcase-article :data="secondArticle" :size="'middle'"></showcase-article>
      <template v-for="article in RestArticle">
        <showcase-article :data="article" :key="article.id"></showcase-article>
      </template>
    </div>
    <banner cnName="新闻" enName="NEWS" id="news" imgSrc="http://alioss.g-cores.com/assets/banner/gadio-f7ed3e007552777820b9f5ffd892937cae37273efaf60593ea09e6abd851743e.jpg"></banner>
    <div class="container">
      <template v-for="item of news">
        <showcase-article :data="item" :key="item.id"></showcase-article>
      </template>
    </div>
    <banner cnName="文章" enName="ARTICLE" id="article" imgSrc="http://alioss.g-cores.com/assets/banner/article-e0042f16e46a464ef52cadd25f3cb7a5e5d6472467f5be6a3a357b9e355637ca.jpg"></banner>
    <div class="container">
      <template v-for="item of articles">
        <showcase-article :data="item" :key="item.id"></showcase-article>
      </template>
    </div>
  </div>
</template>

<script>
import showcaseArticle from '../components/showcase-article'
import slide from '../components/slide'
import axios from 'axios'
import banner from '../components/banner'
export default {
  components: {
    showcaseArticle,
    slide,
    banner
  },
  data () {
    return {
      firstArticle: null,
      secondArticle: null,
      RestArticle: [],
      news: [],
      articles: []
    }
  },
  beforeCreate () {
    let self = this
    axios({
      method: 'post',
      url: 'http://localhost:6666/Psy/selectAllPress.htm'
    }).then(function (res) {
      // res.data[0].href = ''
      res.data.forEach(value => {
        value.href = `http://localhost:8080/#/newsInfo?press_id=${value.id}`
      })
      self.firstArticle = res.data.shift()
      self.secondArticle = res.data.shift()
      self.RestArticle = res.data
      console.dir(self.firstArticle)
      console.dir(self.secondArticle)
    }, function (err) {
      console.log(err)
    })
    // this.$http.post('http://localhost:6666/Psy/selectAllNews.htm')
    // .then((res) => {
    //   this.news = res
    // }, (err) => {
    //   this.$message.error(err)
    // })
    // this.$http.post('http://localhost:6666/Psy/selectAllArticle.htm')
    // .then((res) => {
    //   this.articles = res
    // }, (err) => {
    //   this.$messsage.error(err)
    // })
  }
}
</script>
