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
      <span class="time">{{data.time}}</span>
      <span class="category">
        <a :href="data.category.href">
          {{data.category.name}}
        </a>
      </span>
    </div>
    <div class="img">
      <a href="http://localhost:8080/#/newsInfo" target='_blank' class="block">
        <img :src="data.newsImg" class="news-img" alt="">
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
        <a target="_blank" :href="data.href">{{data.title}}</a>
      </h4>
      <div class="desc">{{data.desc}}</div>
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
          time: '2017-06-29',
          category: {
            name: '也爱看电影',
            href: 'http://localhost:8080/#/newsInfo'
          },
          title: '演员，凯文·史派西',
          desc: '“最巧妙之处就是能让人相信他不存在”',
          newsImg: 'static/40b96fb7-7c51-4007-806c-f8627088eab1_hl.jpg',
          authorImg: 'static/aa080c8b-0b93-4370-96af-1e06afef697d_normal.png',
          href: 'http://localhost:8080/#/newsInfo',
          like: '15',
          comments: '12'
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
</script>
