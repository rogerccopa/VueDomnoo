<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon">
      </div>
      <div class="nav">
        <img :src="menuIcon" @click="showSidePanel = !showSidePanel">
      </div>
      <md-drawer :md-right="true" :md-active.sync="showSidePanel" class="side-drawer"/>
    </div>
  </header>
</template>

<script>
// Logo will be the url/path to the image (and same the Menu)
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/images/menu.png";

export default {
  data() {
    return {
      logoIcon: Logo,
      menuIcon: Menu,
      showSidePanel: false
    };
  }
};
</script>
