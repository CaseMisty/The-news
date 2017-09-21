<style lang="scss" scoped>
span{
  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 250px;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #333;
}
.banner {
  font-family: 'museosans', sans-serif;
  position: relative;
  height: 250px;
  margin-top: 46px;
  overflow: hidden;
  background: #222;
  img {
    position: absolute;
    left: 50%;
    top: -300px;
    margin-left: -1000px;
    width: 2000px;
  }
}
h1 {
  position: relative;
  text-align: center;
  margin: 3em 0 2em;
  text-indent: 2em;
  letter-spacing: 2em;
  font-size: 16px;
  font-weight: 800;
  color: rgb(104,104,104);
}
</style>
<template>
  <div :id="id">
    <div class="banner">
      <img :src="imgSrc">
      <span>{{enName}}</span>
    </div>
    <h1>{{cnName}}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['cnName', 'enName', 'imgSrc', 'id']
}
</script>
