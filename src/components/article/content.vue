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
.article-content p {
  line-height: 1.8;
  font-size: 16px;
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
