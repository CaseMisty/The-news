<style lang="scss">
  .container {
    margin: 0 auto;
    width: 1030px;
  }
  * {
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    text-align: left; // color: #2c3e50;
    margin: 0;
    padding: 0;
    border: 0;
    list-style-type: none;
    box-sizing: border-box!important;
  }
  html,
  body {
    width: 100%;
  }
  .main-view {
    padding-top: 80px;
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
  .clearfix::after {
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
    visibility: hidden;
  }
  .left {
    float: left;
  }
  .middle {
    margin: 0 auto;
  }
  .right {
    float: right;
  }
  .block {
    display: block;
  }
  #to-top {
    position: fixed;
    z-index: 5;
    bottom: 15px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
  .fade-enter-active, .fade-leave-active {
    transition-duration: 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div id="app">
    <headerCom></headerCom>
    <div class="main-view">
      <router-view></router-view>
    </div>
    <transition name="fade">
      <img id="to-top" src="http://alioss.g-cores.com/assets/totop-4489de3bdf698735aae759e5da990bc8ecb48fd5852e674fc5ba4fcdddfd3471.png" v-show="toTopBtnStyle" v-moveTo="'body'">
    </transition>
    <siteFooter v-if="footerActive"></siteFooter>
  </div>
</template>

<script>
  import headerCom from './components/header'
  import siteFooter from './components/footer.vue'
  export default {
    components: {
      headerCom,
      siteFooter
    },
    name: 'app',
    data () {
      return {
        footerActive: true,
        toTopBtnStyle: false
      }
    },
    created () {
      this.$root.eventHub.$on('tooglefooter', (state) => { this.footerActive = state })
      this.$root.eventHub.$on('tooglefooter', (state) => { this.footerActive = state })
      this.scrollEvent()
    },
    methods: {
      scrollEvent () {
        let justScroll = false
        window.addEventListener('scroll', (e) => {
          if (window.pageYOffset > 500) {
            if (this.toTopBtnStyle === false) this.toTopBtnStyle = true
          } else {
            if (this.toTopBtnStyle === true) this.toTopBtnStyle = false
          }
          if (!justScroll) {
            justScroll = true
            scrollFunc()
            if (scrollDirection === 'down') {
            } else if (scrollDirection === 'up') {
            }
            setTimeout(() => { justScroll = false }, 200)
          }
        })
        var scrollAction = {x: 'undefined', y: 'undefined'}
        var scrollDirection
        function scrollFunc () {
          if (typeof scrollAction.x === 'undefined') {
            scrollAction.x = window.pageXOffset
            scrollAction.y = window.pageYOffset
          }
          var diffX = scrollAction.x - window.pageXOffset
          var diffY = scrollAction.y - window.pageYOffset
          if (diffX < 0) {
            scrollDirection = 'right'
          } else if (diffX > 0) {
            scrollDirection = 'left'
          } else if (diffY < 0) {
            scrollDirection = 'down'
          } else if (diffY > 0) {
            scrollDirection = 'up'
          } else {
            // First scroll event
          }
          scrollAction.x = window.pageXOffset
          scrollAction.y = window.pageYOffset
        }
      }
    }
  }
</script>
