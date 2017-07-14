<style scoped>
.banner-background-inner {
  width: 100%;
  height: 440px;
  position: relative;
  color: #fff;
  overflow-x: hidden;
}
.banner-background {
  height: 400px;
}
.banner-filter {
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
}
.title-inner {
  width: 100%;
  position: absolute;
  top: 0;
  padding-top: 100px;
  text-align: center;
}
.title-inner h2 {
  text-align: center;
}
.title-inner small {
  text-align: center;
  font-size: 14px;
  text-shadow: rgb(51, 51, 51) 0 1px 2px;
  margin-bottom: 20px;
  display: block;
}
.title-inner p {
  text-align: center;
  font-size: 14px;
  text-shadow: rgb(51, 51, 51) 0 1px 2px;
}
.banner-title {
  font-size: 32px;
  font-weight: 800;
  text-shadow: rgb(51, 51, 51) 0 1px 2px;
  margin-bottom: 8px;
}
.head-image {
  border-radius: 50%;
  border: 5px solid #fff;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0px;
  left: 30%;
}
.article-banner {
  margin-bottom: 40px;
}
</style>

<template>
  <div class="article-banner">
    <div class="banner-background-inner">
      <img class="banner-background" :src="data.titleImg" alt="">
      <div class="banner-filter"></div>
      <div class="title-inner">
        <h2 class="banner-title">
          {{data.title}}
        </h2>
        <small>
          {{data.describe}}
        </small>
        <p>
          {{data.time}}
        </p>
      </div>
      <img class="head-image" :src="data.headImg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article-banner',
    props: {
      data: {
        default () {
          return {
            title: '很久之前，我的梦想是成为一名上天入地的出租车司机',
            describe: '其实现在可以去开滴滴快车',
            time: '2017-06-30 08:01:00',
            titleImg: 'static/newsBanner.jpg',
            headImg: 'static/headImage.jpg'
          }
        }
      }
    }
  }
</script>
