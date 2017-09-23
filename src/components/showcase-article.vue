<style lang="scss" scoped>
.showcase {
  padding: {
    left: 15px;
    right: 15px;
  }
  float: left;
  .info {
    font-size: 12px;
    color: #909090;
    cursor: default;
  }
  .category {
    float: right;
    a {
      @extend .info;
      font-weight: bold;
      font-size: 13px;
    }
  }
  .img {
    position: relative;
    overflow: hidden;
    .news-img {
      width: 100%;
      transition: transform ease 0.8s;
      display: block;
    }
    &:hover {
      .meta {
        opacity: 1;
      }
      .news-img {
        transform: scale(1.05, 1.05);
      }
    }
  }
  .meta {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    opacity: 0;
    transition: opacity ease 0.8s;
    color: #fff;
    background-color: rgba(246,105,95,0.9);
  }
  .author-info {
    margin: 0 auto;
    width: 180px;
    margin-top: 15%;
  }
  .author-img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .meta-nums {
    span {
      display: inline-block;
      &:first-child {
        margin-left: 20px;
      }
      &:last-child {
        float: right;
      }
    }
  }
  .text {
    height: 120px;
    overflow: hidden;
    h4 a{
      display: inline-block;
      height: 20px;
      position: relative;
      margin-top: 10px;
      font-size: 14px;
      color: #909090;
      font-weight: bold;
      max-height: 40px;
      overflow: hidden;
      line-height: 20px;
      padding-left: 15px;
      border-left: 5px solid #d9534f;
      &:hover {
        color: #686868;
      }
    }
  }
  .desc {
    color: #909090;
    font-size: 12px;
    overflow: hidden;
    max-height: 57px;
  }
}
</style>

<template>
  <div class="showcase" :style="style">
    <div class="info">
      <span class="time">{{data.lastTime}}</span>
      <span class="category">
        <!--:href="data.category.href"-->
        <a>
          {{data.category.name}}
        </a>
      </span>
    </div>
    <div class="img">
      <!-- http://localhost:8080/#/newsInfo -->
      <a :href="data.href" target='_blank' class="block">
        <img :src="data.newsImage" class="news-img" alt="">
        <div class="meta">
          <div class="author-info">
            <img :src="data.authorImg" :alt="data.title" class="author-img middle">
            <p class="meta-nums" :style="`padding-top: ${spanTop}`">
              <span>赞 {{data.like}}</span>
              <span>{{data.comments}} Comments</span>
            </p>
          </div>
        </div>
      </a>
    </div>
    <div class="text">
      <h4>
        <a target="_blank">{{data.title}}</a>
      </h4>
      <div class="desc">{{data.brief}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      style: {width: '15px'},
      spanTop: ''
    }
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    data: {
      type: Object,
      default () {
        return {
          lastTime: '',
          /* category: {
            name: '也爱看电影',
            href: 'http://localhost:8080/#/newsInfo'
          }, */
          title: '',
          brief: '',
          newsImage: '',
          authorImg: '',
          href: '',
          like: '',
          comments: ''
        }
      }
    }
  },
  created () {
    if (this.size === 'middle') {
      this.style.width = '515px'
      this.style.height = '422px'
      this.spanTop = '40px'
    }
    if (this.size === 'small') {
      this.style.width = 1030 / 3 + 'px'
      this.style.height = '325px'
      this.spanTop = '20px'
    }
  }
}
/*
function moveTo (sel) {
  const tar = document.getElementById(sel)
  if (tar) {
    let doc = document
    const docTop = function (...arg) {
      if (arg.length === 0) {
        return doc.body.scrollTop + doc.documentElement.scrollTop
      } else if (arg.length === 1) {
        doc.body.scrollTop = arg[0]
        doc.documentElement.scrollTop = arg[0]
      }
    }
    return function () {
      const tarTop = tar.offsetTop
      const clickTop = docTop()
      let status
      if (clickTop < tarTop) status = 'down'
      else status = 'up'
      const SPEED = Math.abs(tarTop - clickTop) / 60
      const scrollStep = function () {
        let scrollTop = docTop()
        if (status === 'down') {
          scrollTop += SPEED
          if (scrollTop > tarTop) {
            scrollTop = tarTop
            status = 'stop'
          }
        } else if (status === 'up') {
          scrollTop -= SPEED
          if (scrollTop < tarTop) {
            scrollTop = tarTop
            status = 'stop'
          }
        } else if (status === 'stop') {
          return
        }
        docTop(scrollTop)
        requestAnimationFrame(scrollStep)
      }
    }
  } else {
    return undefined
  }
}
*/
</script>
