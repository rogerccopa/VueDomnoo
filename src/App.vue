<template>
  <div>
    <comp-header/>
    <div>
      <md-button>Hello</md-button>
    </div>
    <comp-footer/>
  </div>
</template>

<script>
import compHeader from "./components/Header-footer/Header.vue";
import compFooter from "./components/Header-footer/Footer.vue";

export default {
  components: {
    compHeader,
    compFooter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>