<style scoped>
.article-content {
  margin: 20px auto;
  line-height: 1.8;
  font-size: 16px;
  color: #686868;
  width: 700px;
}
.article-content p {
  line-height: 1.8;
  font-size: 16px;
}
</style>

<template>
  <div class="article-content">
    <p>{{data.content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'article-content',
    props: {
      data: {
        default () {
          return {
            content: ''
          }
        }
      }
    }
  }
</script>
