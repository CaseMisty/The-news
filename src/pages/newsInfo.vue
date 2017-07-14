<style lang="scss">

</style>

<template>
  <div class="newsInfo">
    <ArticleBanner></ArticleBanner>
    <ArticleContent></ArticleContent>
  </div>
</template>

<script>
import ArticleBanner from '../components/article/banner'
import ArticleContent from '../components/article/content'

export default {
  components: {
    ArticleBanner,
    ArticleContent
  }
}
</script>
