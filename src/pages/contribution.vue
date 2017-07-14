<style lang="scss" scoped>
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight: bold;
}
.form_help {
    display: block;
    font-size: 12px;
    // margin-top: 5px;
    margin-bottom: 10px;
    color: #a8a8a8;
}
.contribution {
  display: flex;
  flex-flow: row nowrap;
}
.sidebar {
  height: 828px;
  min-width: 270px;
  background: #eeeef0;
  color: #888;
  overflow-y: auto;
  overflow-x: hidden;
}
.publish-action {
  width: 251px;
}
.publish-action a{
  float: left;
  width: 125.5px;
  height: 45px;
  display: block;
  color: #fff;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
}
[draft] {
  background-color: #d9534f;
  &:hover {
    background-color: #c9302c;
  }
}
[publish] {
  background-color: #5cb85c;
  &:hover {
    background-color: #449d44;
  }
}
.preview {
  min-width: 600px;
  flex-grow: 1;
}
.preview-header {
  height: 400px;
  width: 100%;
  background: #999 50% 50% repeat;
  background-color: #48576A;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.form-group {
  padding: 20px 20px 0;
  width: 250px;
}
.input {
    display: block;
    width: 100%;
    height: 37px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.64345;
    color: #787878;
    background-color: #fff;
    background-image: none;
    border: 1px solid #f0f0f0;
    border-radius: 0;
    -webkit-transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
    -o-transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
    transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
      // box-shadow: none;
      outline: 0px;
    &:focus {
      border: 1px solid #888;
    }
}
.outer-uploader {
  height: 100px;
  line-height: 100px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  transition: background 0.3s;
  &:hover {
    background-color: hsla(10, 0, 50%, 0.2);
  }
}
.uploader {
  overflow: hidden;
  opacity: 0;
  cursor: pointer;
}
textarea.input {
  resize: none;
  height: auto;
}
.preview-title {
  font-size: 32px;
  flex-basis: 50px;
  font-family: '黑体';
  font-weight: bold;
}
.preview-desc {
  max-width: 800px;
  flex-basis: 60px;
}
.preview-info {
}
.preview-body textarea {
  width: 80%;
  border: 2px solid #f0f0f0;
  display: block;
}
.middle {
  height: 440px;
}
</style>

<template>
  <section class="contribution " v-title="'增改文章'">
    <div class="sidebar">
      <div class="sidebar-content">
        <div class="publish-action clearfix">
          <a href="" draft>存为草稿</a>
          <a href="" publish>投稿</a>
        </div>
        <div class="form-group">
          <label for="">标题与视图</label>
          <p class="form_help">标题/摘要 将显示在文章题图之上，最好将摘要控制在42个字以内</p>
          <input type="text" placeholder='标题' class='input' v-model="inputTitle">
          <textarea name="" id="" rows="5" class="input" v-model="inputDesc" placeholder="摘要"></textarea>
          <label for="">封面图</label>
          <p class="form_help"> 尺寸在1600x900以上，必须传。<strong>支持图片格式gif、png、jpg，图片总大小保持在3.5MB以下。</strong></p>
          <p class="outer-uploader">
            上传
            <input type="file" class="uploader">
          </p>
          <lebel>头图</lebel>
          <p class="form_help">
            尺寸推荐为2000×400以上，主体内容一定要居中，如果没有设置，将以头图替代。
          </p>
          <p class="outer-uploader">
            上传
            <input type="file" class="uploader">
          </p>
          <lebel>app头图</lebel>
          <p class="form_help">
            尺寸推荐为1500x620以上，主体内容一定要居中，如果没有设置，将以头图替代。
          </p>
          <p class="outer-uploader">
            上传
            <input type="file" class="uploader">
          </p>
        </div>
      </div>
    </div>
    <div class="preview">
      <div class="preview-header">
        <div class="preview-title">{{title}}</div>
        <div class="preview-desc">{{desc}}</div>
        <div class="preview-info">2014-11-23 20:58</div>
      </div>
      <div class="preview-body">
        <textarea class="middle" name=""></textarea>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      inputTitle: '',
      inputDesc: ''
    }
  },
  created () {
    this.$root.eventHub.$emit('tooglefooter', false)
  },
  beforeDestroy () {
    this.$root.eventHub.$emit('tooglefooter', true)
  },
  computed: {
    title () {
      if (!this.inputTitle) return '未命名文章'
      else return this.inputTitle
    },
    desc () {
      if (!this.inputDesc) return '摘要'
      else return this.inputDesc
    }
  }
}
</script>
