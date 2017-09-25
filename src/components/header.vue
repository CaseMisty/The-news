<style scoped>
  .header {
    width: 100%;
    color: rgb(153, 153, 153);
    background: rgba(255,255,255,0.95);
    font-size: 14px;
    position: fixed;
    z-index: 1;
  }
  .header-inner {
    width: 1030px;
    height: 80px;
    margin: 0 auto;
  }
  .sLogo {
    box-sizing: border-box;
    font-size: 22px;
    padding: 23.5px 15px;
    padding-right: 10px;
    height: 80px;
  }
  .logo {
    height: 80px;
    padding: 23.5px 15px;
    padding-left: 0;
    box-sizing: border-box;
  }
  .login-div div {
    height: 100%;
    width: 58px;
    height: 80px;
  }
  .nav {
    height: 100%;
    padding: 28.5px 15px;
  }
  .left a {
    color: rgb(153, 153, 153);
    display: block;
    width: 100%;
    height: 100%;
    line-height: 80px;
    text-align: center;
  }
  .left a:hover {
    text-decoration: none;
    color: #333;
  }
</style>

<template>
  <header class="header">
    <div class="header-inner">
      <a href="#/">
        <img class="sLogo left" src="static/sLogo.png" alt="logo">
        <img class="logo left" src="static/logo.png" alt="logo">
      </a>
      <div class="login-div right">
        <div class="left">
          <a href="" v-moveTo="'#news'">新闻</a>
        </div>
        <div class="left">
          <a v-moveTo="'#articles'">文章</a>
        </div>
        <div class="left">
          <a href="">电台</a>
        </div>
        <div class="left">
          <a href="">视频</a>
        </div>
        <div class="left">
          <a href="#/login">登录</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
 /* eslint-disable semi */
  export default {
    name: 'header',
    directives: {
      moveTo: {
        inserted (el, binding) {
          var moveTo = function (sel) {
            const tar = document.querySelector(sel)
            if (tar) {
              let doc = document
              const docTop = function (...arg) {
                if (arg.length === 0) {
                  return doc.body.scrollTop + doc.documentElement.scrollTop
                } else if (arg.length === 1) {
                  doc.body.scrollTop = arg[0]
                  doc.documentElement.scrollTop = arg[0]
                  return docTop()
                }
              }
              return function (e) {
                if (window.location.href === 'http://localhost:8080/#/') {
                  e.preventDefault()
                }
                const tarTop = tar.offsetTop
                const clickTop = docTop()
                let status
                if (clickTop < tarTop) status = 'down'
                else status = 'up'
                const DURATION = 0.4
                const SPEED = Math.abs(tarTop - clickTop) / (DURATION / 1 * 60)
                let lastTop
                const scrollStep = function () {
                  let scrollTop = docTop()
                  lastTop = scrollTop
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
                  }
                  const thisTop = docTop(scrollTop)
                  if (thisTop === lastTop) {
                    status = 'stop'
                  }
                  if (status === 'stop') {
                    return
                  }
                  requestAnimationFrame(scrollStep)
                }
                scrollStep()
              }
            } else {
              return undefined
            }
          }
          el.addEventListener('click', moveTo(binding.value))
        }
      }
    }
  }
</script>
