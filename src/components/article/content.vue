<style lang="scss">
.article-content {
  margin: 20px auto;
  line-height: 1.8;
  font-size: 16px;
  color: #686868;
  width: 700px;
}
.story img, .story embed, .story iframe, .story object {
    display: block;
    max-width: 100%;
    margin: 20px auto;
}
.story_elem-text em {
  @extend .article-content;
}
i, cite, em, var, address, dfn {
    font-style: italic;
}

.story_elem {
    margin: 20px 0;
}
.story_elem-text {
    margin: 0;
}
.story>p, .story .story_elem>p {
    margin: 20px 0;
}
.story_elem-image, .story_elem-image a, .story_elem-gallery, .story_elem-gallery a {
    text-decoration: none;
    font-weight: normal;
}
.story a {
    font-weight: bold;
    color: #101010;
    text-decoration: underline;
}
.story_elem-image img {
    margin: 0 auto;
}
.story_elem-image a {
  text-decoration: none;
}

.story_elem-image, .story_elem-embed {
    padding: 0 15px;
    margin: 30px 0;
}
.story_elem-gallery {
    margin: 35px auto;
    width: 600px;
    height: 337px;
    overflow: hidden;
}
h3 {
  font-size: 24px;
}
.story_elem-text h3 em, .story_elem-text strong {
  font-size: 24px;
  font-family: "Open Sans", "Helvetica Neue", Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
.article-content p {
  line-height: 1.8;
  font-size: 16px;
  strong{
    font-size: inherit;
  }
}
.story_caption {
    text-align: center;
    font-size: 12px;
    color: #909090;
    margin-top: 5px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    font-weight: 400;
}
.story h4, .story .h4, .story h5, .story .h5, .story h6, .story .h6 {
    margin-top: 34.5px;
    margin-bottom: 23px;
}
.story {
  max-width: 700px;
  margin: 70px auto;
  padding: 0 15px;
  font-size: 16px;
  line-height: 1.8;
  word-break: break-all;
  word-wrap: break-word;
}
blockquote {
    padding: 11.5px 23px;
    margin: 0 0 23px;
    font-size: 17.5px;
    border-left: 5px solid #f0f0f0;
}
.td-w-sm .td-header, .td-w-sm .td-header .td-header-container, .td-w-sm .td__footer {
    min-width: 1080px !important;
}
.td-header {
    font-size: 14px;
    width: 100%;
    min-width: 908px;
    height: 60px;
}
.td-header-container {
    min-width: 908px;
    height: 40px;
    padding: 10px 0;
    background: #f60;
}
.td-logo-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 415px;
    height: 60px;
    overflow: hidden;
}
.td-right-bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 410px;
    height: 60px;
    overflow: hidden;
}
.td-header-container .td-box {
    z-index: 1290;
    position: relative;
    padding: 0 40px;
    height: 40px;
    zoom: 1;
    margin: 0 auto;
    min-width: 828px;
}
.td-logo {
    float: left;
}
.td-header a {
    text-decoration: none;
}
.td-w-sm .td-search {
    left: 40%;
    width: 380px;
}
.td-search {
    position: absolute;
    height: 36px;
    top: 50%;
    left: 50%;
    margin-left: -227px;
    margin-top: -18px;
    display: block;
    width: 452px;
}
.td-head-right {
    float: right;
}
.td-mytd {
    float: right;
    width: 60px;
    height: 16px;
    line-height: 16px;
    padding: 6px 15px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.45);
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    margin-top: 5px;
}
.td-mytd .td-mytd-msg:link {
    color: rgba(255,255,255,0.9);
}
.td-mytd .td-mytd-msg:hover, .td-mytd .td-mytd-msg:visited {
    color: #fff;
}
.td-login, .td-notice {
    position: relative;
    float: right;
}
.login-before {
    cursor: pointer;
}
.login-before {
    float: left;
    min-width: 66px;
    margin-right: 20px;
    padding-top: 8px;
    position: relative;
}
.login-before .msg-icon {
    display: inline-block;
    margin-top: -4px;
    width: 34px;
    height: 34px;
    line-height: 34px;
    font-size: 34px;
    text-align: center;
    color: #f1f1f1;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    vertical-align: middle;
}
.login-before .msg-text {
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    padding-left: 5px;
}
.td-login-pop {
    top: 53px;
    right: 33px;
    display: none;
    padding: 12px 80px 12px 18px;
    line-height: 22px;
    height: 22px;
}
.td-h__upload {
    padding-right: 20px;
}
.td-login, .td-notice {
    position: relative;
    float: right;
}
.td-w-sm .td-play__container {
    padding-top: 20px;
    width: 1080px;
}
.td-play__container {
    padding-bottom: 40px;
}
.td-container, .td-play__container {
    margin: 0 auto;
    padding: 20px 0;
}
.td-row, .td-container, .td-play__container {
    margin-right: -10px;
    margin-left: -10px;
    font-size: 0;
    vertical-align: top;
}
.td-playarea--l {
    float: left;
}
.td-playarea {
    position: relative;
    margin-bottom: 20px;
}
.td-w-sm .td-interactbox, .td-w-sm .td-playbox {
    width: 665px;
}
.td-w-sm .td-playbox {
    height: 374.0625px;
}
.td-playbox {
    background: #000000;
}
.story_elem-embed {
    padding: 0 15px;
    margin: 30px 0;
}
.story_elem-embed>[allowfullscreen], .story_elem-embed>[id="ACFlashPlayer-re"] {
@media (min-width: 768px){
    width: 640px !important;
    height: 424px !important;}
}


.story_elem-embed>embed, .story_elem-embed>iframe, .story_elem-embed>object {
    display: block;
    margin: 0 auto;
}
</style>

<template >
  <div class="article-content" v-lazyLoad>
    <p v-html="data.content"></p>
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
    },
    directives: {
      /**
       * @
       */
      lazyLoad: {
        update (el) {
          const throttle = function (cb, delay, atMost) {
            var timeout = null
            var startTime = new Date()
            return function () {
              var currTime = new Date()
              clearTimeout(timeout)
              if (currTime - startTime >= atMost) {
                cb()
                startTime = currTime
              } else {
                timeout = setTimeout(cb, delay)
              }
            }
          }
          const lazyLoad = function () {
            const imgs = el.querySelectorAll('img[data-original]')
            console.log('懒加载的元素:')
            console.dir(imgs)
            const len = imgs.length
            let n = 0
            return function () {
              let seeHeight = document.documentElement.clientHeight
              let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
              for (let i = n; i < len; i++) {
                if (imgs[i].offsetTop <= seeHeight + scrollTop + 500) {
                  // console.log(`item: ${imgs[i].offsetTop} seeHeight:${seeHeight} scrollTop:${scrollTop} 已滚动高度: ${seeHeight + scrollTop + 500}`)
                  // console.log('start')
                  imgs[i].src = imgs[i].dataset.original
                  n++
                }
              }
            }
          }
          setTimeout(() => {
            const loadImg = lazyLoad()
            window.addEventListener('scroll', throttle(loadImg, 300, 600), false)
          }, 0)
        }
      }
    }
  }
</script>
