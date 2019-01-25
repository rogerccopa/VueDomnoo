<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon">
      </div>
      <div class="nav">
        <img :src="menuIcon">
      </div>
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
      menuIcon: Menu
    };
  }
};
</script>
