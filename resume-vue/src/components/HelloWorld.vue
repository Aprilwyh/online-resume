<template>
  <div class="hello">
    <div class="top-div">
      <div class="icon" @click="showMenu()" id="icon">
        <span class="line" id="line"></span>
      </div>
      <div class="left-div" id="menu"></div>
    </div>

    <show-menu v-if="isShow"></show-menu>
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import showMenu from "./menu";
export default {
  name: "HelloWorld",
  data() {
    return {
      isShow: false // 控制菜单展示
    };
  },
  methods: {
    showMenu() {
      /* if (this.isShow) {
        // 隐藏菜单
        document.getElementById("line").classList.remove("active");
        this.isShow = false;
      } else {
        // 显示菜单
        document.getElementById("line").classList.add("active");
        this.isShow = true;
      } */
      // TODOvue动画展示
    }
  },
  components: {
    "show-menu": showMenu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-div {
  height: 70px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0%;
  left: 0%;
}
.icon {
  width: 30px;
  padding-top: 10px;
  position: relative;
  left: 2%;
  top: 30%;
  cursor: pointer;
  z-index: 99;
}
.line,
.line:before,
.line:after {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #000;
  position: absolute;
  transition: all 0.2s;
}
.line:before {
  content: "";
  top: -10px;
}
.line:after {
  content: "";
  bottom: -10px;
}
.active {
  transform: rotate(45deg);
}
.active:before {
  content: "";
  top: 0;
  opacity: 0;
}
.active:after {
  content: "";
  bottom: 0;
  transform: rotate(-90deg);
}
.left-div {
  width: 0px;
  height: 70px;
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: #fff;
  transition: all 0.5s;
}
</style>
