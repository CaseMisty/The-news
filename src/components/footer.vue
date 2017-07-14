<style lang="scss" scoped>
.footer {
  text-align: center;
  color: #c8c9ca;
  background: #717071;
}
.footer-contact {
  text-align: center;
  line-height: 50px;
  background: #f8f8f8;
  font-size: 16px;
  font-weight: bold;
}
.footer-info {
  padding: 0 15px 10px;
}
.footer-top {
  height: 70px;
}
img {
  vertical-align: middle;
  border: 0;
}
@media (min-width: 768px) {
  .footer-logos {
    margin-top: 30px;
  }
}
.footer-logos {
  margin-top: 20px;
}
a {
  color: #888;
  text-decoration: none;
  background-color: transparent;
}
.footer-logos img {
  height: 22px;
  margin: 0 20px 10px;
}
* {
  text-align: center;
}
@media (min-width: 768px) {
  .footer_follow {
      margin-top: 30px;
  }
}
.footer h4 {
    font-size: 17px;
}
p {
    margin: 0 0 11.5px;
}
.footer-follow a {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: inline-block;
}
@mixin tubiao($index: 0) {
  $ypos: $index * -60px;
  background-position: 0 $ypos !important;
  &:hover {
    background-position: 0 $ypos - 30px !important;
  }
}
a.footer-weibo {
  @include tubiao(4);
}
a.footer-weixin {
  @include tubiao(5);
}
a.footer-taobao {
  @include tubiao(3);
}
a.footer-qq {
  @include tubiao(2);
}
a.footer-podcast {
  @include tubiao(1);
}
a.footer-rss {
  @include tubiao(0);
}
</style>

<template>
  <footer class="footer">
    <div class="footer-contact">
      <a href="" target="_blank">CONTACT US | 联系我们</a>
    </div>
    <div class="container">
      <div class="footer-info">
        <img src="static/footer_top-4c293a683d2aece39281f2cf7e9bb022c2e55dfbd963d2862d20e3690eea91ae.jpg" class="footer-top" style="margin-bottom: 20px;">
        <div class="footer-logos" style="margin-bottom: 20px;">
          <a href="">
            <img src="static/gadio-01-e8679bfc838ae676eead7fa354c6ab7e26f3ec7bbf093c58ccaa647ae7701de4.png" alt="gadio">
          </a>
          <a href="">
            <img src="static/gadiopro-01-3bbe85deb999275b31c7658a0e09299751850497bbee7e10cedb6a83ab29de75.png" alt="">
          </a>
          <a href="">
            <img src="static/music-01-a744efa6c6fbba4474e9f2a4b4de64347065eddc7e9ebccc375a7de2e9829f74.png" alt="">
          </a>
          <a href="">
            <img src="static/docu-01-8640c29ee16770157814443d1dbd01ccd5b3cf007b249db6fc6523b295662d2a.png" alt="">
          </a>
          <a href="">
            <img src="static/special-01-69dcd46be43114fa958e1d969bc14297e12b193dd753fb924e07e0beff25dd37.png" alt="">
          </a>
        </div>
        <div class="footer-follow">
          <h4>Follow us</h4>
          <p>
            <a class="footer-weibo" href="" :style="followImgStyle"></a>
            <a class="footer-weixin" href="" :style="followImgStyle"></a>
            <a class="footer-taobao" href="" :style="followImgStyle"></a>
            <a class="footer-qq" href="" :style="followImgStyle"></a>
            <a class="footer-podcast" :style="followImgStyle"></a>
            <a class="footer-rss" :style="followImgStyle"></a>
          </p>
        </div>
        <p>All Rights Reserved 2009-2015 GAMECORES - Terms & Conditions 闽ICP备11023385号-1</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      followImgStyle: {
        backgroundImage: 'url(static/social-icons-a3b106088bc205d310d8247f237f65073ec0de69f6eecf25b798f90cc0a5c905.png)',
        backgroundRepeat: 'no-repeat'
      }
    }
  }
}
</script>
