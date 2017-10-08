<style scoped lang="scss">
.banner-background-inner {
  width: 100%;
  @media (min-width: 992px){
    height: 400px;
  }
  @media(min-width: 768px )and (max-width: 992px) {
    height: 300px;
  }
  position: relative;
  color: #fff;
  overflow: hidden;
}
.banner-background {
  height: 400px;
}
.banner-filter {
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
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
  img {
    border-radius: 50%;
    border: 5px solid #fff;
    width: 80px;
    height: 80px;
    display: block;
  }
  p {
    color: #999;
    text-align: center;
    font-size: 14px;
    width: 80px;
  }
  width: 700px;
  height: 100px;
  box-sizing: border-box;
  position: absolute;
  bottom: -60px;
  left: 15px;
  @media (min-width: 768px) {
    left: 50%;
    margin-left: -300px;
  }
}
.article-banner {
  // margin-bottom: 40px;
  position: relative;
}
</style>

<template>
  <div class="article-banner">
    <div class="banner-background-inner">
      <img class="banner-background" :src="data.titleImage" alt="">
      <div class="banner-filter"></div>
      <div class="title-inner">
        <h2 class="banner-title">
          {{data.title}}
        </h2>
        <small>
          {{data.brief}}
        </small>
        <p>
          {{data.lastTime}}
        </p>
      </div>
    </div>
    <div class="head-image">
        <img :src="data.authorImg" alt="">
        <p>{{data.nickname}}</p>
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
            brief: '其实现在可以去开滴滴快车',
            lastTime: '2017-06-30 08:01:00',
            titleImage: 'static/newsBanner.jpg',
            authorImg: 'static/headImage.jpg'
          }
        }
      }
    }
  }
</script>
