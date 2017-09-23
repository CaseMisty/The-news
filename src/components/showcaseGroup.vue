<template>
  <div class="container clearfix">
    <template v-for="item of items">
      <showcase-article :data="item" :key="item.id"></showcase-article>
    </template>
  </div>
</template>
<<script>
import showcaseArticle from '../components/showcase-article'
export default {
  components: {
    showcaseArticle
  },
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
