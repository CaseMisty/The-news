<style lang="scss">

</style>

<template>
  <div class="main">
    <slide></slide>
    <div class="container clearfix" style="padding-top: 20px;">
      <showcase-article :size="'middle'"></showcase-article>
      <showcase-article :size="'middle'"></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
    </div>
  </div>
</template>

<script>
import showcaseArticle from '../components/showcase-article'
import slide from '../components/slide'
export default {
  components: {
    showcaseArticle,
    slide
  }
}
</script>
