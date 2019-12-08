<template>
  <div class="hello">
    <div class="top-div">
      <!-- 左上角图标 -->
      <div class="icon" @click="showMenu()" id="icon">
        <span class="line" id="line"></span>
      </div>
      <!-- 图标控制菜单时的背景 -->
      <div class="left-div" v-if="isShow"></div>
      <span>个 人 简 历</span>
    </div>
    <!-- 左侧导航栏(悬浮) -->
    <show-menu v-if="isShow"></show-menu>
    <!-- 主要内容展示区 -->
    <my-content></my-content>
  </div>
</template>

<script>
import showMenu from "./menu";
import myContent from "./content";
export default {
  name: "HelloWorld",
  data() {
    return {
      isShow: false // 控制菜单展示
    };
  },
  methods: {
    showMenu() {
      if (this.isShow) {
        // 隐藏菜单
        document.getElementById("line").classList.remove("active");
        this.isShow = false;
      } else {
        // 显示菜单
        document.getElementById("line").classList.add("active");
        this.isShow = true;
      }
      // TODOvue动画展示
    }
  },
  components: {
    "show-menu": showMenu,
    "my-content": myContent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
}
.top-div {
  height: 70px;
  width: 100%;
  background-color: #eee;
  box-shadow: 0px 0px 8px #888;
  /*   position: fixed;
  top: 0%;
  left: 0%; */
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
.top-div > span {
  font-size: 30px;
  line-height: 20px;
}
.left-div {
  width: 20%;
  height: 70px;
  position: absolute;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.5s;
}
</style>
