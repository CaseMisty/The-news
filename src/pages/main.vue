<style lang="scss">

</style>

<template>
  <div class="main">
    <slide></slide>
    <div class="container clearfix" style="padding-top: 20px;">
      <showcase-article :data="firstArticle" :size="'middle'"></showcase-article>
      <showcase-article :data="secondArticle" :size="'middle'"></showcase-article>
      <template v-for="article in RestArticle">
        <showcase-article :data="article"></showcase-article>
      </template>
    </div>
  </div>
</template>

<script>
import showcaseArticle from '../components/showcase-article'
import slide from '../components/slide'
import axios from 'axios'

export default {
  components: {
    showcaseArticle,
    slide
  },
  data () {
    return {
      firstArticle: null,
      secondArticle: null,
      RestArticle: []
    }
  },
  beforeCreate () {
    let self = this
    axios({
      method: 'post',
      url: 'http://localhost:6666/Psy/selectAllPress.htm'
    }).then(function (res) {
      res.data[0].href = ''
      res.data.forEach(value => {
        value.href = `http://localhost:8080/#/newsInfo?press_id=${value.id}`
      })
      self.firstArticle = res.data[0]
      self.secondArticle = res.data[1]
      res.data.shift()
      res.data.shift()
      self.RestArticle = res.data
    }, function (err) {
      console.log(err)
      // alert('网络不好,或重新登录')
    })
  }
}
</script>
