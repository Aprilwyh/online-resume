<template>
  <div class="menu-box" :style="'height:' + height + 'px;'">
    <i class="iconfont icon-menu"></i>
    <div>
      1
      <br />2
      <br />3
      <br />4
      <br />5
      <br />6
      <br />7
      <br />8
      <br />9
      <br />10
      <br />11
      <br />12
      <br />13
      <br />14
      <br />15
      <br />16
      <br />17
      <br />18
      <br />19
      <br />20
      <br />1
      <br />2
      <br />3
      <br />4
      <br />5
      <br />6
      <br />7
      <br />8
      <br />9
      <br />10
      <br />11
      <br />12
      <br />13
      <br />14
      <br />15
      <br />16
      <br />17
      <br />18
      <br />19
      <br />20
    </div>
  </div>
</template>
<script>
export default {
  name: "showMenu",
  data() {
    return {
      height: document.documentElement.clientHeight
    };
  },
  mounted() {
    this.getHeight();
  },
  methods: {
    getHeight() {
      window.onresize = () => {
        return (() => {
          window.height = document.documentElement.clientHeight;
          this.height = window.height;
        })();
      };
    }
  }
};
</script>
<style scoped>
.menu-box {
  background: rgba(0, 0, 0, 0.3);
  width: 25%;
  overflow-y: auto;
  position: fixed;
  top: 0%;
  left: 0%;
}
.menu-box i {
  font-size: 44px;
  position: absolute;
  top: 5%;
  left: 21%;
  cursor: pointer;
}
</style>