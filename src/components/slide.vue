<style scoped lang="scss">
  $blue: #49c8fd;
  $s-width: 100%;
  $s-height: 420px;
  $borderRadius: 3px;
  $prev-position: -84px 50%;
  $prev-position-hover: 0px 50%;
  $next-position: -125px 50%;
  $next-position-hover: -42px 50%;
  $左按钮left: 0px;
  @mixin slideSize ($s-width, $s-height) {
    width: $s-width;
    height: $s-height;
  }
  .slide {
    position: relative;
    @include slideSize($s-width, $s-height);
    img {
      @include slideSize($s-width, $s-height);
    }
    .img-box {
      a{
        float: left;
        position: absolute;
      }
      .title {
        position: absolute;
        // padding: 0 15px;
        text-indent: 15px;
        width: $s-width;
        bottom: 0px;
        $height: 52px;
        height: $height;
        line-height: $height;
        background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        font: {
          size: 21px;
          family: 'Microsoft YaHei';
          weight: bold;
        }
        color: #fff;
        &:hover {
          color: $blue;
        }
      }
    }
  
    .switch-bar {
      width: 100%;
      padding: 15px;
      position: absolute;
      // right: 0;
      bottom: 10px;
      .switch-btn {
        $rect: 11px;
        width: $rect;
        height: $rect;
        float: left;
        margin-right: 20px;
        border-radius: $rect/2;
        background-color: rgba(0,0,0,0.4);
        box-sizing: border-box;
        border: 2px solid rgba(255,255,255,0.5);
        cursor: pointer;
        transition: 0.3s;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          @extend .cur;
        }
      }
      .cur {
        // width: 25px;
        border-color: rgba(0,0,0,0.4);
        background-color: rgba(255,255,255,0.4);
      }
    }
    $pn-btn-width: 41px;
    $pn-btn-height: 69px;
    $pn-btn-top: 147px;
    [name=prev-btn], [name=next-btn] {
      width: $pn-btn-width;
      height: $pn-btn-height;
      position: absolute;
      top: $s-height/2 - $pn-btn-height/2;
      z-index: 2;
      cursor: pointer;
      background-repeat: no-repeat;
    }
    &:hover {
      [name=prev-btn], [name=next-btn]{
        transition: opacity 0.5s;
        opacity: 1;
      }
    }
    [name=prev-btn] {
      left: $左按钮left;
      border-radius: 0 $borderRadius $borderRadius 0;
      background-position: $prev-position;
      &:hover {
        background-position: $prev-position-hover;
      }
    }
    [name=next-btn] {
      right: 0;
      background-position: $next-position;
      border-radius: $borderRadius 0 0 $borderRadius;
      &:hover {
        background-position: $next-position-hover;
      }
    }
  }
  .slide ul{
    position: relative;
  }
  .slide img{
    position: absolute;
    left: 0;
  }
  .sfade-enter,.sfade-leave-active {
    opacity: 0;
  }
  .sfade-enter-active, .sfade-leave-active {
    transition: 0.3s;
  }
</style>

<template>
  <div class="slide" v-if="slideNews.length" @mouseenter="clearInv" @mouseleave="runInv">
    <ul>
      <li>
        <a :href="slideNews[nowIndex].href" target="_blank">
          <transition name="sfade">
            <!--<template v-if="isShow && slideNews[nowIndex].title">
              <img key="one" :src="slideNews[nowIndex].src" alt="">
              <div class="title"> {{slideNews[nextIndex].title}} </div>
            </template>
            <template v-else>
              <img key="two" :src="slideNews[nowIndex].src" alt="">
            </template>-->
            <img key="one" v-if="isShow" :src="slideNews[nowIndex].src" alt="">
            <img key="two" v-else :src="slideNews[nowIndex].src" alt="">
          </transition>
        </a>
      </li>
    </ul>
    <div class="switch-bar">
      <div class="middle clearfix" :style="`width: ${slideIndex * 32 - 20}px`">
        <span class="switch-btn" v-for="(item, index) of slideNews" :class="{cur: index === nowIndex}" @click="goto(index)"></span>
      </div>
    </div>
    <span name="prev-btn" :style="`background-image: url('static/icon-slides.png');`" @click="goto(prevIndex)"></span>
    <span name="next-btn" :style="`background-image: url('static/icon-slides.png');`" @click="goto(nextIndex)"></span>
  </div>
</template>

<script>
export default {
  props: {
    inv: {
      type: Number,
      default: 3.5
    },
    slideNews: {
      type: Array,
      default: [
        {
          src: 'static/c14df5ce-d459-42ae-875e-ce97271dcba5.jpg',
          href: ''
        },
        {
          src: 'static/53785fca-015a-4c25-9c78-9b8e18d058d0.jpg',
          href: ''
        },
        {
          src: 'static/cb2ce18e-7643-4eda-9b9b-6845cc9b2882.jpg',
          href: ''
        }
      ]
    }
  },
  data () {
    return {
      isShow: true,
      nowIndex: 0,
      showLeft: false,
      showRight: false,
      duration: 0.3, // 左右移动的动画时间 (s)
      nowImgStyle: {
        display: 'block'
      }
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slideNews.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slideNews.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    },
    slideIndex () {
      return this.slideNews.length
    }
  },
  methods: {
    goto (index) {
      this.isShow = !this.isShow
      this.nowIndex = index
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv * 1000)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
