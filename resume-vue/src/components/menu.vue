<template>
  <div class="menu-box" :style="'height:' + height + 'px;'">
    <ul>
      <li>
        <span>◇</span>
        首页
      </li>
      <li>自我介绍</li>
      <li>测试li</li>
    </ul>
    <ul>
      <li>
        <span>◇</span>
        项目经验
      </li>
      <li>项目简介</li>
      <li>测试li</li>
    </ul>
    <ul>
      <li>
        <span>◇</span>
        测试ul
      </li>
      <li>测试li</li>
      <li>测试li</li>
    </ul>
    <ul>
      <li>
        <span>◇</span>
        测试ul
      </li>
      <li>测试li</li>
      <li>测试li</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "showMenu",
  data() {
    return {
      height: document.documentElement.clientHeight - 70
    };
  },
  mounted() {
    this.getHeight();
  },
  methods: {
    getHeight() {
      window.onresize = () => {
        return (() => {
          window.height = document.documentElement.clientHeight - 70;
          this.height = window.height;
        })();
      };
    }
  }
};
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.menu-box {
  width: 20%;
  overflow-y: auto;
  position: fixed;
  top: 70px;
  left: 0%;
  overflow-x: hidden;
}
.menu-box ul {
  width: 100%;
}
.menu-box ul li {
  background: rgba(0, 0, 0, 0.6);
  list-style-type: none;
  width: 100%;
  height: 50px;
}
.menu-box ul li:hover {
  color: #39c5bb;
  cursor: pointer;
  text-shadow: 0px 0px 5px #39c5bb;
}
.menu-box ul li:first-child {
  font-size: 22px;
  text-align: left;
  padding-left: 20%;
}
/* .menu-box ul li:first-child span {
  font-size: 40px;
} */
.menu-box ul li {
  line-height: 50px;
  color: #222;
  font-size: 18px;
}
</style>