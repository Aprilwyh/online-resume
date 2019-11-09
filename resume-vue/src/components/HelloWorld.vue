<template>
  <div class="hello">
    <i class="iconfont icon-menu" @click="showMenu()"></i>
    <show-menu></show-menu>
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
    return {};
  },
  methods: {
    showMenu() {}
  },
  components: {
    "show-menu": showMenu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i {
  font-size: 44px;
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
}
</style>
