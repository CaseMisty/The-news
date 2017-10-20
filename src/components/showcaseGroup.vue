<style lang="scss" scoped>
.tc {
    text-align: center;
    p {
      margin: 0 0 11.5px;
    }
}
.btn-hollow {
    color: #909090;
    background-color: #f0f0f0;
    border-color: #909090;
    border-radius: 0;
    background-color: #fff !important;
    text-decoration: none
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    min-width: 50px;
    cursor: pointer;
    background-image: none;
    border: 1px solid ;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.64345;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

<template>
  <div class="container clearfix">
    <div class="clearfix">
      <template v-for="item of items">
        <showcase-article :data="item" :key="item.id"></showcase-article>
      </template>
    </div>
    <p class="tc" v-if="more">
      <a class="btn btn-hollow" v-moveTo="'body'" :href="'#/more/'+more">更多</a>
    </p>
  </div>
</template>
<script>
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
    },
    more: {
      type: String,
      default: ''
    }
  }
}
</script>
